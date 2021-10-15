import {useEffect, useState} from "react";
import MobileDetect from "mobile-detect";

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<"ios" | "android" | "desktop" | undefined>();

  useEffect(() => {
    const mobileDetector = new MobileDetect(window.navigator.userAgent);
    const os = mobileDetector.os();
    if (os === "iOS") {
      setDeviceType("ios");
      return;
    }
    if (os == "AndroidOS") {
      setDeviceType("android");
      return;
    }
    setDeviceType("desktop");
  }, []);

  return deviceType;
};

export default useDeviceType;
