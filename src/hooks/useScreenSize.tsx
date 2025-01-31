import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 425);

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
