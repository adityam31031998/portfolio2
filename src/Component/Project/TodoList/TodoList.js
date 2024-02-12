<<<<<<< HEAD
import React, { useState } from "react";
import "./TodoList.css";
import star from "./star.png";
import starActiveImage from "./star1.png";
import meditationimg from "./meditation.png";
import breakfast from "./breakfast.png";
import vitamins from "./vitamins.png";
import emptyGlass from "./glass.png";
import fullGlass from "./water.png";
const TodoList = () => {
  const [starsActive, setStarsActive] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [waterActive, setWaterActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  function toggleWaterActive(index) {
    const newWaterGlass = [...waterActive];
    newWaterGlass[index] = !newWaterGlass[index];
    setWaterActive(newWaterGlass);
  }
  const toggleStarActive = (index) => {
    const newStarsActive = [...starsActive];
    newStarsActive[index] = !newStarsActive[index];
    setStarsActive(newStarsActive);
  };
=======
import React from "react";
import "./TodoList.css";
import start from "./star.png";
import meditationimg from "./meditation.png";
import breakfast from "./breakfast.png";
import vitamins from "./vitamins.png";
import glass from "./glass.png";
const TodoList = () => {
>>>>>>> 332daff1378fa4358ce441fd7a1d45f88243c95b
  const date = new Date();
  return (
    <div className="todoContainer">
      <div className="containerCenter">
        <div className="titleWrap">
          <div className="title">My Mental Health Tracking App</div>
          <div className="dates">
            <div className="currentDate">Date: {date.toLocaleDateString()}</div>
            <div>
              Productivity
              <br />
<<<<<<< HEAD
              {starsActive.map((active, index) => (
                <img
                  key={index}
                  alt="star"
                  className="starts"
                  onClick={() => toggleStarActive(index)}
                  src={active ? starActiveImage : star}
                />
              ))}
=======
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
>>>>>>> 332daff1378fa4358ce441fd7a1d45f88243c95b
            </div>
          </div>
        </div>
        <div className="morningContainer">
          <div className="morningList">
            <div className="morningIteml">
              <p>Morning Rotine</p>
              <div className="morningalign">
                <img
                  src={meditationimg}
                  alt="loading"
                  className="meditationcss"
                />
                <p>Meditation</p>
                <input type="checkbox" />
              </div>
              <div className="morningalign">
                <img src={breakfast} alt="loading" className="meditationcss" />
                <p>BreakFast</p>
                <input type="checkbox" />
              </div>
              <div className="morningalign">
                <img src={vitamins} alt="loading" className="meditationcss" />
                <p>vitamins</p>
                <input type="checkbox" />
              </div>
            </div>
            <div className="water">
              <p>Water Balance</p>
<<<<<<< HEAD
              {waterActive.map((active, index) => (
                <img
                  key={index}
                  src={active ? fullGlass : emptyGlass}
                  alt=""
                  className="glass"
                  onClick={() => toggleWaterActive(index)}
                />
              ))}
=======
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
              <img src={glass} alt="" className="glass" />
>>>>>>> 332daff1378fa4358ce441fd7a1d45f88243c95b
            </div>
          </div>
          <div className="todolists">
            <p>TodoList:</p>
            <div className="todoItem">
              <div className="todolistalign">
                <input type="checkbox" />
                <input type="text" className="todolistinput" />
              </div>
              <div className="todolistalign">
                <input type="checkbox" />
                <input type="text" className="todolistinput" />
              </div>
              <div className="todolistalign">
                <input type="checkbox" />
                <input type="text" className="todolistinput" />
              </div>
              <div className="todolistalign">
                <input type="checkbox" />
                <input type="text" className="todolistinput" />
              </div>
              <div className="todolistalign">
                <input type="checkbox" />
                <input type="text" className="todolistinput" />
              </div>
            </div>
            <div className="hoursleep"></div>
          </div>
        </div>
        <div className="thingsContainer">
          <div className="thingsList">
            <div className="thingsItem">
              <input type="checkbox" />
            </div>
            <div className="positve"></div>
          </div>
          <div className="mood">
            <div className="moodList"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
