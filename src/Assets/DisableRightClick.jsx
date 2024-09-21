import React, { useEffect } from "react";

const DisableRightClick = ({ children }) => {
  const handleContextMenu = (e) => {
    // Prevent context menu only for right-click (button === 2)
    if (e.button === 2) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return <div>{children}</div>;
};

export default DisableRightClick;
