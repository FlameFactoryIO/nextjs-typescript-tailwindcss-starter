import React, {createContext, MutableRefObject, useRef} from "react";

/**
 * PlayOneVideoAtOnceContext and PlayOneVideoAtOnceProvider expose an event onPlay(pauseFunction)
 * and the current pauseFunction (just for debugging purposes)
 *
 * This context tracks the current video playing (via onPlay) and will
 * pause that video using the pauseFunction that was passed the next time
 * a video calls the onPlay function
 *
 * the result is that only one video will play at any given time
 *
 * Any new custom Video component not using VideoPlayerComponent will need
 * to use
 *
 * const {onPlay} = useContext(PlayOneVideoAtOnceContext)
 *
 */
const PlayOneVideoAtOnceContext = createContext<{onPlay: (video: MutableRefObject<HTMLVideoElement>) => void}>({
  onPlay: () => {},
});

export const PlayOneVideoAtOnceProvider = ({ children }) => {
  const currentVideoRef = useRef<HTMLVideoElement | undefined>(undefined);

  const onPlay = (videoRef: MutableRefObject<HTMLVideoElement>) => {
    if (videoRef.current === currentVideoRef.current) return;
    if (currentVideoRef.current)
      currentVideoRef.current.pause();
    currentVideoRef.current = videoRef.current;
  };

  return (
    <PlayOneVideoAtOnceContext.Provider value={{ onPlay }}>
      {children}
    </PlayOneVideoAtOnceContext.Provider>
  );
};

export default PlayOneVideoAtOnceContext;
