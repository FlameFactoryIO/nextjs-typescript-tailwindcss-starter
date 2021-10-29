import {createContext, useEffect, useState} from "react";
import fscreen from "fscreen";

const FullScreenContext = createContext<{
  isFullScreen: boolean;
  enterFullScreen: (element: Element) => void;
  exitFullScreen: () => Promise<void>;
}>({
  isFullScreen: false,
  enterFullScreen: () => {},
  exitFullScreen: async () => {},
});

export const FullScreenProvider = ({ children }) => {
  const [isFullScreen, setFullScreen] = useState(false);

  const enterFullScreen = fscreen.requestFullscreen;

  const exitFullScreen = async () => {
    try {
      if (document.fullscreenElement)
        await document.exitFullscreen();
    } catch {}
    finally {
      setFullScreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      setFullScreen(!!document.fullscreenElement);
    });
  }, []);

  return (
    <FullScreenContext.Provider value={{ isFullScreen, enterFullScreen, exitFullScreen }}>
      {children}
    </FullScreenContext.Provider>
  );
};

export default FullScreenContext;
