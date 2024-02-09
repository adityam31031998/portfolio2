import React from "react";
import Lottie from "lottie-react";
import animationData from "../../animation/react.json";
// import htmlIcon from "../../animation/html.json";
// import Typed from "react-typed";
import loading from "../../animation/loading.json";
import "./Home.css";
import Slider from "./Slider";
const Home = () => {
  return (
    <div className="home">
      <div className="col-12">
        <div className="col-8">
          {/* <div className="colh-12"></div> */}
          <div className="box">

          <div className="slider">
            <div className="caption">
              I Am
              <div className="text-box">
                <div>Full Stack</div>
                <div>Mern Stack</div>
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
          {/* <div className="type-wrap">
            <Typed
              strings={[
                "Hello Everyone. I am Aditya. m, Full Stact and Mern Stack Developer.",
              ]}
              typeSpeed={100}
              startDelay={0}
              backSpeed={60}
              backDelay={999}
              loop
              cursorChar="|"
              contentType="html"
            />
          </div> */}
          <div className="colh-12">
            <img src="./work.png" alt="loading" className="work" />
         
          </div>
        </div>

        {/* <div className="col-3"> */}
          {/* <div className="image-container"> */}
            <img src="./Banner2.png" alt="loading" className="background-image"/>
            <Lottie animationData={animationData} className="overlay-image1" />
            {/* <Lottie animationData={htmlIcon} className="overlay-image" /> */}
            <Lottie animationData={loading} className="overlay-image" />
          {/* </div> */}
        {/* </div> */}

      {/* <img src="./bg.png" alt="loading"  className="wal" /> */}
      </div>
    </div>
  );
};

export default Home;
