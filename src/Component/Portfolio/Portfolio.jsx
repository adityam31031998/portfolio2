// Portfolio.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Movies from "../Project/Movies/Movies";
import AgeCalculator from "../Project/AgeCalulator/AgeCalculator";
import Calculator from "../Project/Calculator/Calculator";
import Gamelist from "../Project/GameList/Gamelist";
import Game from "../Project/Games/Game";
import TodoList from "../Project/TodoList/TodoList";

import GoogleKeep from "../Project/GoogleNotes/GoogleKeep";
import PortfoilioData from "./PortfoilioData";
import Weather from "../Project/Weather/Weather";
import Radio from "../Project/music/musicComponent/Radio/Radio";
import MusicMain from "../Project/music/MusicMain";

const Portfolio = () => {
  const imagesData = [
    {
      id: 1,
      src: "./todolist.png",
      title: "Todolist",
      links: "/Portfolio/todolist",
    },
    { id: 2, src: "./spotify1.png", title: "Music", links: "/Portfolio/music" },
    {
      id: 3,
      src: "./weather.png",
      title: "Weather",
      links: "/Portfolio/Weather",
    },
    {
      id: 4,
      src: "./google-keep.png",
      title: "GoogleNotes",
      links: "/Portfolio/GoogleKeep",
    },
    {
      id: 5,
      src: "./calci.png",
      title: "Calculator",
      links: "/Portfolio/calculator",
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Games" element={<Game />} />
        <Route path="/Gamelist" element={<Gamelist />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/AgeCalculator" element={<AgeCalculator />} />
        <Route path="/GoogleKeep" element={<GoogleKeep />} />
        <Route path="/music/*" element={<MusicMain />} />
        {/* <Route path="radio" element={<Radio />} /> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        <Route path="/" element={<PortfoilioData images={imagesData} />} />
      </Routes>
    </>
  );
};

export default Portfolio;
