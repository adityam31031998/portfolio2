import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import animationLoading from "../assets/animation/bar-loader.json";
const GetLocation = ({ setGetLocation }) => {
  const [get_lat_lon, setGet_Lat_Lon] = useState({});
  useEffect(() => {
    setInterval(() => {
      <Lottie animationData={animationLoading} />;
    }, 3000);
    if (navigator.geolocation) {
      // console.log(navigator))
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGet_Lat_Lon({ latitude, longitude });
        },
        (error) => {
          alert("unable to fetch your loction!!, Please turn on your location");
          console.error(
            error.message,
            "unable to find your location, please turn on your location"
          );
        }
      );
    } else {
      alert("Your brower doest not support location");
    }
  }, []);

  return <div>{setGetLocation(get_lat_lon)}</div>;
};

export default GetLocation;
