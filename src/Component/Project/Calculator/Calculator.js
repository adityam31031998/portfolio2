import React, { useState } from "react";
import "./Calculator.css";
import * as math from "mathjs";


const Calculator = () => {
    const [display,setDisplay]=useState('')
    const handleClick=(value)=>{
        setDisplay((prev)=>prev+value)
    }
    const calculateResult=()=>{
      try {
        const result = math.evaluate(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay("Error");
      }
    }
    const clearDisplay = () => {
        setDisplay('');
      };
  return (
    <div className="container2">
      <div className="calBody">
      <div className="calBodyInner">
        <div className="screen" >{display}</div>
        <div className="calbody1">
          <button onClick={() => handleClick('7')} className="calButton">7</button>
          <button onClick={() => handleClick('8')} className="calButton">8</button>
          <button onClick={() => handleClick('9')} className="calButton">9</button>
          <button onClick={() => handleClick('+')} className="calButton">+</button>
          <button onClick={() => handleClick('4')} className="calButton">4</button>
          <button onClick={() => handleClick('5')} className="calButton">5</button>
          <button onClick={() => handleClick('6')} className="calButton">6</button>
          <button onClick={() => handleClick('-')} className="calButton">-</button>
          <button onClick={() => handleClick('1')} className="calButton">1</button>
          <button onClick={() => handleClick('2')} className="calButton">2</button>
          <button onClick={() => handleClick('3')} className="calButton">3</button>
          <button onClick={() => handleClick('*')} className="calButton">*</button>
          <button onClick={() => handleClick('0')} className="calButton">0</button>
          <button onClick={clearDisplay} className="calButton">C</button>
          <button onClick={calculateResult} className="calButton">=</button>
          <button onClick={()=>handleClick('/')} className="calButton">/</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Calculator;

