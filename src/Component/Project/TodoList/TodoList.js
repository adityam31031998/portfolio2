import React from "react";
import "./TodoList.css";
import start from "./star.png";
import meditationimg from "./meditation.png";
import breakfast from "./breakfast.png";
import vitamins from "./vitamins.png";
import glass from "./glass.png";
const TodoList = () => {
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
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
              <img src={start} alt="loading" className="starts" />
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
