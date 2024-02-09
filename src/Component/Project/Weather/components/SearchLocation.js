import React, { useEffect } from "react";
import "../componentCss/SearchLocation.css";
import iconLocation from "../assets/icons/location.png";
import iconSearch from "../assets/icons/searchIcon.png";
import citylist from "./cities.json";
const SearchLocation = ({
  getLocation,
  setlocationResponse,
  setTemperDate,
}) => {

  let api_key = "9d81b01f5cf402f40b5e8ffd43a48762";
  let indiaLatitude;
  let indialongitude;
  useEffect(() => {
    let api_key = "9d81b01f5cf402f40b5e8ffd43a48762";

    if (Object.keys(getLocation).length !== 0) {
      const currentLocation = async () => {
        try {
          let getCurrentFetchApi = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${getLocation.latitude}&lon=${getLocation.longitude}&exclude=minutely,alerts&units=metric&appid=${api_key}`
          );
          let response = await getCurrentFetchApi.json();

          setlocationResponse(response);
          setTemperDate(response);
        } catch (error) {
          console.log(error.message, "faid to load api");
        }
      };
      currentLocation();
    }
  }, [getLocation, setlocationResponse, setTemperDate]);
  const handleInput = async (e) => {

    if (e !== "") {
      // let searchInput = await fetch(
      //   // `http://api.openweathermap.org/geo/1.0/direct?q=${e},"IN"&limit=5&appid=${api_key}`
      //   `https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=${api_key}`
      // );
      // let response = await searchInput.json();
      // setlocationResponse(response);
      citylist.forEach((india) => {
        if (
          india.country === "IN" &&
          india.name.toLowerCase() === e.toLowerCase()
        ) {
          indiaLatitude = india.coord.lat;
          indialongitude = india.coord.lon;
        }
      });
      let searchInput = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${indiaLatitude}&lon=${indialongitude}&exclude=minutely,alerts&units=metric&appid=${api_key}`
      );
      let res = await searchInput.json();

      setTemperDate(res);
    }
  };
  return (
    <div className="searchBox">
      <div className="controlSearchBox">
        <div className="iconInput">
          <img
            className="iconLocation"
            alt="locationIconLoding"
            src={iconLocation}
          />
          <input
            className="searchInput"
            onChange={(e) => handleInput(e.target.value)}
         
            type="text"
            placeholder="Enter Cities Name"
          />
        </div>

        <img className="iconSearch" alt="locationIconLoding" src={iconSearch} />
      </div>
    </div>
  );
};

export default SearchLocation;
