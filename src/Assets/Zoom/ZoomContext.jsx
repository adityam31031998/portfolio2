import React, { createContext, useContext, useState } from "react";

const ZoomContext = createContext();

export const ZoomProvider = ({ children }) => {
  const [zoomState, setZoomState] = useState({});

  const setZoom = (key, value) => {
    setZoomState((prev) => ({ ...prev, [key]: value }));
  };
  return (
    <ZoomContext.Provider value={{ zoomState, setZoom }}>
      {children}
    </ZoomContext.Provider>
  );
};

export const useZoom = () => {
  return useContext(ZoomContext);
};
