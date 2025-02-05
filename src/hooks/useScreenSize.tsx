import { useEffect, useState } from "react";

interface Props {
  customWidth?: number;
}

const useScreenSize = ({ customWidth = 425 }: Props = {}) => {
  const [isMobileView, setMobileView] = useState(
    window.innerWidth <= customWidth
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setMobileView(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // clean up function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileView;
};

export default useScreenSize;
