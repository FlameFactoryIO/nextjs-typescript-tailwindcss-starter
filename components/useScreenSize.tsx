import {useMediaQuery} from "react-responsive";

export const useScreenSize = () => {
  const isDesktop = useMediaQuery({ minWidth: 1350 })
  const isTablet = useMediaQuery({ minWidth: 768 })
  const isSmall = useMediaQuery({ maxWidth: 767 })

  return { isDesktop, isTablet, isSmall };
};

export default useScreenSize;
