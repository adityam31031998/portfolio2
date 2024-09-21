import React from "react";
// import htmlIcon from "../../animation/html.json";
// import Typed from "react-typed";
import "./Home.css";
import Slider from "./Slider";
const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="mainLeft">
          <div className="slider">
            <div className="caption">
              I Am
              <div className="text-box">
                <div>Devops Cloud</div>
                <div>Full Stack</div>
                <div>Mern Stack</div>
              </div>
            </div>
            <div className="carousel-container">
              <div className="carousel-wrapper" id="carouselWrapper">
                <Slider src="./logo/html.png" />
                <Slider src="./logo/js.png" />
                <Slider src="./logo/reactjs.png" />
                <Slider src="./logo/css.png" />
                <Slider src="./logo/node.png" />
                <Slider src="./logo/db.png" />
                <Slider src="./logo/ex1.png" />
                <Slider src="./logo/python.png" />
                <Slider src="./logo/git.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="mainRight">
          <img src="./work.png" alt="loading" className="work" />
          <img src="./Banner2.png" alt="loading" className="background-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
