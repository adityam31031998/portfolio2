import React from "react";
import "./Resume.css";
import "./line.css";
const Content = ({ heading, startYear, endYear, para,topic }) => {
  return (
    <div className="contents">
      <div className="contentss">
        <h5>{heading}</h5>
        <h6>{topic}</h6>
        <p className="para">{para}</p>
      </div>
      <div className="circlesTop">
        <div className="endYear ">
          <h4>{endYear}</h4>
        </div>
      </div>
      <div className="circlesBottom ">
        <div className="startYear ">
          <h4>{startYear}</h4>
        </div>
      </div>
    </div>
  );
};

export default Content;
