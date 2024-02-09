// App.js
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavLeft from "./Assets/NavLeft/NavLeft";
import NavRight from "./Assets/NavRight/NavRight";
import { ZoomProvider } from "./Assets/Zoom/ZoomContext";
import { NavLeftFotter } from "./Assets/NavLeftFotter/NavLeftFotter";
import homeIcon from "./Assets/icons/home4.png"
import aboutIcon from "./Assets/icons/aboutus1.png"
import resumeIcon from "./Assets/icons/resume.png"
import portfolioIcon from "./Assets/icons/portfolio.png"
import porfile from "./Assets/icons/fin.png"

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    setSidebarActive(false);
  };

  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ZoomProvider>
        <div >

        <div className={`body1 ${sidebarActive ? "sidebar-active" : ""}`} >
          <div id="sidebar" className={sidebarActive ? "active" : ""}>
            <div className="toggle-btn" onClick={toggleSidebar}>
              <div className={`toggle ${sidebarActive ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="navLeft">
              <div className="profile">
                <img src={porfile} className="profile" alt="loading" />
                <p className="profileName">Aditya .M</p>
              </div>

              <NavLeft navText={"Home"} navTo={"/"} imgs={homeIcon} onClick={handleLinkClick} />
              <NavLeft navText={"About"} navTo={"About"} imgs={aboutIcon} onClick={handleLinkClick} />
              <NavLeft navText={"Resume"} navTo={"Resume"} imgs={resumeIcon} onClick={handleLinkClick} />
              <NavLeft navText={"Portfolio"} navTo={"Portfolio"} imgs={portfolioIcon} onClick={handleLinkClick} />
              <NavLeftFotter />
            </div>
          </div>
          <div className="content"></div>
          <NavRight />
        </div>
        </div>
      </ZoomProvider>
    </BrowserRouter>

  );
};

export default App;
