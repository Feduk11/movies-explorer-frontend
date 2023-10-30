import { useState, useEffect, useCallback } from 'react';

function useResponsiveVisibleMoviesCount() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const handlePageLoad = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const resizeTimeoutDelay = 300;
    let resizeTimeout;

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, resizeTimeoutDelay);
    });

    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handlePageLoad);
      clearTimeout(resizeTimeout);
    };
  }, [handleResize, handlePageLoad]);



  return [windowWidth];
}

export default useResponsiveVisibleMoviesCount;