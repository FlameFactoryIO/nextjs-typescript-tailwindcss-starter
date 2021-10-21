import {FC, useCallback, useContext, useEffect, useRef, useState} from "react";
import Hls from "hls.js";
import PlayOneVideoAtOnceContext from "./PlayOneVideoAtOnceContext";
import {FaExpand, FaPlay, FaVolumeMute, FaVolumeUp} from "react-icons/fa";
import useDeviceType from "./useDeviceType";
import FullScreenContext from "./FullScreenContext";

const VideoPlayer: FC<{
  videoImage: string;
  videoUrl: string;
  // videoStyle,
  // videoOverlayStyle,
  presentOverlay?: boolean;
  hideMuteButton?: boolean,
  sendPostView?: () => void; // todo change to onViewed
  // renderPlayButton,
  // nativeID,
  // desktop,
  // playIconSize,
  // playButtonStyles,
  // fullscreenButtonStyle,
  className?: string;
}> = ({
  videoImage,
  videoUrl,
  // style,
  // videoStyle,
  // videoOverlayStyle,
  presentOverlay = false,
  hideMuteButton = false,
  sendPostView,
  // renderPlayButton,
  // nativeID,
  // desktop,
  // playIconSize,
  // playButtonStyles,
  // fullscreenButtonStyle = {},
  // useAlternatePlayButtonStyle = false,
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

  const { onPlay } = useContext(PlayOneVideoAtOnceContext);
  const { enterFullScreen, exitFullScreen, isFullScreen } = useContext(FullScreenContext);

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

    if (!videoRef.current || !videoUrl || isHLSVideo(videoUrl)) return;
    setVideoStatus('loading');

    // mp4 videos will most probably not be completely loaded, so canplay is enough
    videoRef.current.addEventListener(
      'canplay',
      () => {
        if (videoRef.current && videoRef.current.paused) {
          handleReady();
        }
      },
      false,
    );
    videoRef.current.addEventListener('ended', handleEnded, false);
    videoRef.current.addEventListener('play', handlePlay, false);
    videoRef.current.addEventListener('pause', handlePause, false);

    videoRef.current.src = videoUrl;
    videoRef.current.load();

    return () => {
      videoRef.current?.pause();
      videoRef.current?.removeEventListener('canplay', handleReady);
      videoRef.current?.removeEventListener('ended', handleEnded);
      videoRef.current?.removeEventListener('play', handlePlay);
      videoRef.current?.removeEventListener('pause', handlePause);
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
    enterFullScreen(videoRef.current).catch(console.error);
  }, [isFullScreen]);

  const handlePlayClick = async () => {
    if (videoRef.current?.paused) {
      onPlay(videoRef);

      await videoRef.current.play();
      if (deviceType === "android") {
        await enterFullScreen(wrapperRef.current);
        setTimeout(() => {
          videoRef.current.play();
        }, 100);
      } else if (deviceType === "ios") {
        enterFullScreen(videoRef.current).catch(console.error);
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
    <div ref={wrapperRef} className={`relative bg-black rounded-16px overflow-hidden w-260px h-320px ${className}`}>
      <video
        ref={videoRef}
        poster={videoImage}
        className="video-js object-contain h-full mx-auto"
      />

      { hasOverlay ? (
        <div className={`absolute left-0 top-0 right-0 bottom-0 bg-black bg-opacity-40`} />
      ) : null }

      { videoStatus !== 'playing' ? (
        <div className={`absolute left-0 top-0 right-0 bottom-0 flex align-center justify-center items-center`}>
          <div className="border-4 border-opacity-50 border-white-500 bg-black bg-opacity-50 w-50px h-50px rounded-full flex align-center justify-center items-center">
            <FaPlay className="text-white" onClick={handlePlayClick} />
          </div>
        </div>
      ) : null }

      { videoStatus !== 'loading' && (
        <div className={`absolute left-0 top-0 right-0 bottom-0`} onClick={handlePlayClick}>
          { !hideMuteButton ? (
            isMuted ? (
              <FaVolumeMute onClick={handleMuteClick} />
            ) : (
              <FaVolumeUp onClick={handleMuteClick} />
            )
          ) : null }

          { deviceType === "desktop" && !isFullScreen ? (
            <FaExpand onClick={toggleFullScreen} />
          ) : null }
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
