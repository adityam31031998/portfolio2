import React from "react";
import Lottie from "lottie-react";
import "./NavLeftFotter.css";
import facebook from "../../animation/facebook.json";
import whatsapp from "../../animation/whatsapp4.json";
import instagram from "../../animation/instagram1.json";
import google from "../../animation/google.json";
export const NavLeftFotter = () => {
  return (
    <div className="socialMedia">
    <a href="https://www.instagram.com/aditya_varma06/" target="_blank" rel="noopener noreferrer" >
      <Lottie className="animation" animationData={instagram} />
    </a>
    <a href="https://www.facebook.com/aditya31031998" target="_blank" rel="noopener noreferrer" >
      <Lottie className="animation" animationData={facebook} />
    </a>
    <a href="https://api.whatsapp.com/send/?phone=9066910183&text=Hi &type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" >
      <Lottie className="animation" animationData={whatsapp} />
    </a>
    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" >
      <Lottie className="animation" animationData={google} />
    </a>
  </div>
  );
};
