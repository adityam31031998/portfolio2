import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "./componentCss/Weather.css";
import GetLocation from "./components/getLocation";
import SearchLocation from "./components/SearchLocation";
import animationData from "./assets/animation/bar-loader.json";
import Temperature from "./components/Temperature";
import TemperatureDetails from "./components/TemperatureDetails";
import clearSky from "./assets/icons/weatherIcons/clear.png";
import scatteredClouds from "./assets/icons/weatherIcons/scatteredClouds.png";
import fewClouds from "./assets/icons/weatherIcons/fewClouds.png";
import brokenCloud from "./assets/icons/weatherIcons/brokenCloud.png";
import overcast from "./assets/icons/weatherIcons/overcast.png";
import scattered from "./assets/icons/weatherIcons/scatteredCloud.png";

function Weather() {
  const [loading, setLoading] = useState(true);
  const [locationResponse, setlocationResponse] = useState(true);
  const [getLocation, setGetLocation] = useState({});
  const [temperDate, setTemperDate] = useState({});
  let [selectedTemp, setSelectedTemp] = useState({});
  let [selectedOptionalTemp, setSelectedOptionalTemp] = useState({});
  let weatherIcon = {
    "clear sky": clearSky,
    "few clouds": fewClouds,
    "scattered clouds": scattered,
    "broken clouds": brokenCloud,
    "shower rain": scatteredClouds,
    rain: scatteredClouds,
    thunderstorm: scatteredClouds,
    snow: scatteredClouds,
    mist: scatteredClouds,
    fog: scatteredClouds,
    smoke: scatteredClouds,
    "overcast clouds": overcast,
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="weatherContainer">
      {/* {console.log("object", temperDate)} */}
      {loading ? (
        <Lottie animationData={animationData} className="animationLoadingCss" />
      ) : (
        <div className="WeatherContainerMiddle">
          <GetLocation setGetLocation={setGetLocation} />
          <SearchLocation
            getLocation={getLocation}
            setlocationResponse={setlocationResponse}
            setTemperDate={setTemperDate}
          />
          <Temperature
            setSelectedOptionalTemp={setSelectedOptionalTemp}
            setSelectedTemp={setSelectedTemp}
            setTemperDate={setTemperDate}
            weatherIcon={weatherIcon}
            temperDate={temperDate}
          />
          <TemperatureDetails
            selectedOptionalTemp={selectedOptionalTemp}
            selectedTemp={selectedTemp}
            weatherIcon={weatherIcon}
            locationResponse={locationResponse}
            temperDate={temperDate}
          />
        </div>
      )}
    </div>
  );
}

export default Weather;
