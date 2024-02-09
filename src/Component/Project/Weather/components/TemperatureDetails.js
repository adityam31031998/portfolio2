import React, { useState, useEffect } from "react";
import "../componentCss/TemperatureDetails.css";
// import TempGraph from "./TempGraph";

const TemperatureDetails = ({
  locationResponse,
  weatherIcon,
  selectedTemp,
  temperDate,
  selectedOptionalTemp,
}) => {
  const [handlePressure, setHandlePressure] = useState({});

  useEffect(() => {
    if (selectedOptionalTemp?.temp?.max) {
      setHandlePressure(selectedOptionalTemp);
    } else {
      setHandlePressure(temperDate.current);
    }
  }, [selectedOptionalTemp, temperDate]);

  function getWeatherIcon(data) {
    let weatherIconApi = data;
    let weatherIconApiKey;
    for (let key in weatherIcon) {
      if (key === weatherIconApi) {
        weatherIconApiKey = key;
        break;
      }
    }
    if (weatherIcon[weatherIconApiKey]) {
      return (
        <img
          src={weatherIcon[weatherIconApiKey]}
          className="temCelciusIcon"
          alt=""
        />
      );
    }
  }

  return (
    <div className="tempDetails">
      {temperDate?.current?.temp || selectedOptionalTemp ? (
        <>
          <div className="temCelciusContainer">
            {selectedOptionalTemp?.temp?.max ? (
              <>
                <div className="temCelcius">
                  <h1>{Math.round(selectedOptionalTemp?.temp?.max)}&deg;C</h1>
                  {getWeatherIcon(
                    selectedOptionalTemp?.weather?.[0]?.description
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="temCelcius">
                  <h1>{Math.round(temperDate?.current?.temp)}&deg;C</h1>
                  {getWeatherIcon(
                    temperDate?.daily?.[0]?.weather?.[0]?.description
                  )}
                </div>
              </>
            )}
            {/* <TempGraph selectedTemp={selectedTemp} temperDate={temperDate} /> */}
            <div className="pressuredata">
              <div className="pressuredetails">
                <p>
                  <b>Pressure</b>
                </p>
                <p>{handlePressure?.pressure}hpa</p>
              </div>
              <div className="humidity">
                <p>
                  <b>Humidity</b>
                </p>
                <p>{handlePressure?.humidity} %</p>
              </div>
            </div>
            <div className="sundetails">
              <div className="sunricedetails">
                <p>
                  <b>Sunrise</b>
                </p>
                <p>
                  {new Date(handlePressure?.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
              <div className="sunsetdetails">
                <p>
                  <b>Sunset</b>
                </p>
                <p>
                  {new Date(
                    handlePressure?.sunrise * 1000
                  ).toLocaleTimeString()}
                </p>
                {console.log(handlePressure)}
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Please Wait</h1>
      )}
      <div></div>
    </div>
  );
};

export default TemperatureDetails;
