import {FC, useCallback, useContext, useEffect, useRef, useState} from "react";
import Hls from "hls.js";
import PlayOneVideoAtOnceContext from "./PlayOneVideoAtOnceContext";
import {FaExpand, FaPlay, FaVolumeMute, FaVolumeUp} from "react-icons/fa";
import useDeviceType from "./useDeviceType";
import FullScreenContext from "./FullScreenContext";
import fscreen from "fscreen";

const VideoPlayer: FC<{
  videoImage: string;
  videoUrl: string;
  presentOverlay?: boolean;
  hideMuteButton?: boolean,
  sendPostView?: () => void; // todo change to onViewed
  className?: string;
}> = ({
  videoImage,
  videoUrl,
  presentOverlay = false,
  hideMuteButton = false,
  sendPostView,
  className = "",
}) => {
  const deviceType = useDeviceType();

  const wrapperRef = useRef<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>();
  const intervalRef = useRef<number | null>(null);

  const [videoStatus, setVideoStatus] = useState<"loading" | "ready" | "playing" | "paused">('loading');
  const [isMuted, setIsMuted] = useState(false);
  const [hasOverlay, setHasOverlay] = useState(!!presentOverlay);
  const [timeWatched, setTimeWatched] = useState(0);

  const {onPlay} = useContext(PlayOneVideoAtOnceContext);
  const {exitFullScreen, isFullScreen} = useContext(FullScreenContext);

  const isHLSVideo = (videoUrl) => videoUrl.indexOf('.m3u8') > -1;

  useEffect(() => {
    const handleReady = () => {
      if (videoStatus === 'loading') {
        setVideoStatus('ready');
      }
    };

    const handlePlay = () => {
      setVideoStatus('playing');
    };

    const handlePause = () => {
      setVideoStatus('paused');
    };

    const handleEnded = () => {
      if (sendPostView) sendPostView();
      setTimeWatched(0);
      setVideoStatus('paused');
    };

    const player = videoRef.current;
    if (!player || !videoUrl || isHLSVideo(videoUrl)) return;
    setVideoStatus('loading');

    // mp4 videos will most probably not be completely loaded, so canplay is enough
    player.addEventListener(
      'canplay',
      () => {
        if (player && player.paused) {
          handleReady();
        }
      },
      false,
    );
    player.addEventListener('ended', handleEnded, false);
    player.addEventListener('play', handlePlay, false);
    player.addEventListener('pause', handlePause, false);

    player.src = videoUrl;
    player.load();

    return () => {
      player?.pause();
      player?.removeEventListener('canplay', handleReady);
      player?.removeEventListener('ended', handleEnded);
      player?.removeEventListener('play', handlePlay);
      player?.removeEventListener('pause', handlePause);
    };
  }, [videoUrl]);

  useEffect(() => {
    const handleReady = () => {
      if (videoStatus === 'loading') {
        setVideoStatus('ready');
      }
    };

    const handleEnded = () => {
      if (sendPostView) sendPostView();
      setTimeWatched(0);
      setVideoStatus('paused');
    };

    if (!videoRef.current || !videoUrl || !isHLSVideo(videoUrl)) return;

    videoRef.current.oncanplay = handleReady;
    videoRef.current.onended = handleEnded;

    if (Hls.isSupported()) {
      const hls = new Hls();
      // bind them together
      hls.attachMedia(videoRef.current);
      // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(videoUrl);
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      setVideoStatus('ready');

      videoRef.current.src = videoUrl;
    }
  }, [videoRef, videoUrl]);

  useEffect(() => {
    if (timeWatched === 3 && sendPostView) {
      sendPostView();
    }
  }, [timeWatched]);

  useEffect(() => {
    if (videoStatus === 'playing') {
      intervalRef.current = window.setInterval(() => {
        setTimeWatched((prev) => prev + 1);
      }, 500);
    } else if (videoStatus === 'paused') {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current)
        clearInterval(intervalRef.current);
    };
  }, [videoStatus]);

  const pauseVideo = () => {
    videoRef.current?.pause();
    setVideoStatus('paused');

    if (presentOverlay) {
      setHasOverlay(true);
    }
  };

  const toggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      exitFullScreen().catch(console.error);
      return;
    }

    // enterFullScreen(videoRef.current); // fixme(hmassad): using the context function doesn't work
    fscreen.requestFullscreen(videoRef.current);
  }, [exitFullScreen, isFullScreen]);

  const handlePlayClick = async () => {
    if (videoRef.current?.paused) {
      onPlay(videoRef);

      await videoRef.current.play();
      if (deviceType === "android") {
        // enterFullScreen(wrapperRef.current); // fixme(hmassad): using the context function doesn't work
        fscreen.requestFullscreen(wrapperRef.current);
        setTimeout(() => {
          videoRef.current.play();
        }, 100);
      } else if (deviceType === "ios") {
        // enterFullScreen(videoRef.current); // fixme(hmassad): using the context function doesn't work
        fscreen.requestFullscreen(videoRef.current);
      }
      setVideoStatus('playing');
      if (presentOverlay) {
        setHasOverlay(false);
      }
    } else {
      pauseVideo();
    }
  };

  const handleMuteClick = () => {
    setIsMuted((prev) => {
      videoRef.current.muted = !prev;
      return !prev;
    });
  };

  return (
    <div ref={wrapperRef} className={`relative bg-black rounded-16px overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        poster={videoImage}
        className="video-js h-full w-full"
      />

      {hasOverlay ? (
        <div className={`absolute left-0 top-0 right-0 bottom-0 bg-black bg-opacity-40`}/>
      ) : null}

      {videoStatus !== 'playing' ? (
        <div className={`absolute left-0 top-0 right-0 bottom-0 flex align-center justify-center items-center cursor-pointer`} onClick={handlePlayClick}>
          <div className="border-4 border-opacity-50 border-white-500 bg-black bg-opacity-50 w-50px h-50px rounded-full flex align-center justify-center items-center">
            <FaPlay className="text-white"/>
          </div>
        </div>
      ) : null}

      {videoStatus !== 'loading' && (
        <div className={`absolute left-0 top-0 right-0 bottom-0 text-white cursor-pointer`} onClick={handlePlayClick}/>
      )}

      {!hideMuteButton ? (
        <div
          className="absolute bottom-10px left-10px flex items-center justify-center cursor-pointer hover:bg-black hover:bg-opacity-70 text-white rounded-full h-40px w-40px"
          onClick={handleMuteClick}
        >
          {isMuted ? <FaVolumeMute/> : <FaVolumeUp/>}
        </div>
      ) : null}

      {deviceType === "desktop" && !isFullScreen ? (
        <div
          className="absolute bottom-10px right-10px flex items-center justify-center cursor-pointer hover:bg-black hover:bg-opacity-70 text-white rounded-full h-40px w-40px"
          onClick={toggleFullScreen}
        >
          <FaExpand/>
        </div>
      ) : null}
    </div>
  );
};

export default VideoPlayer;
