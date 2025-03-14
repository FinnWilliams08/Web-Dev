import React, { createContext, useState, useEffect } from 'react';

export const ZoomContext = createContext();

export const ZoomProvider = ({ children }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty('--zoom-level', zoomLevel);
  }, [zoomLevel]);

  const increaseZoom = () => setZoomLevel((prev) => Math.min(prev + 0.1, 2));
  const decreaseZoom = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  const resetZoom = () => setZoomLevel(1);

  return (
    <ZoomContext.Provider value={{ zoomLevel, increaseZoom, decreaseZoom, resetZoom }}>
      {children}
    </ZoomContext.Provider>
  );
};