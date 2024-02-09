import React from "react";
import { Link } from "react-router-dom";
import { useZoom } from "../Zoom/ZoomContext";
import "./NavLeft.css";

const NavLeft = ({ navText, navTo, imgs, onClick }) => {
  const { setZoom } = useZoom();

  const handleLinkClick = () => {
    setZoom(navTo, true);

    setTimeout(() => {
      setZoom(navTo, false);
    }, 999);

    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <Link to={navTo} onClick={handleLinkClick}>
        <div className="navLeftContainer">
          <img src={imgs} className="icon1" alt="loading" />
          {navText}
        </div>
      </Link>
      <hr />
    </>
  );
};

export default NavLeft;
