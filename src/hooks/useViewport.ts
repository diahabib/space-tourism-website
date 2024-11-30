import { useEffect, useState } from "react";

interface ViewportState {
  isTablet: boolean;
  isLaptop: boolean;
}

const useViewport = (): ViewportState => {
  const [viewport, setViewport] = useState<ViewportState>({
    isTablet: false,
    isLaptop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        isTablet: window.innerWidth >= 768 && window.innerWidth < 992,
        isLaptop: window.innerWidth >= 1024,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return viewport;
};

export default useViewport;
