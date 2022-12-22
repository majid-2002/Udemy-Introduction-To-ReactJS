import React from "react";
import ReactDOM from "react-dom";

function Heading() {
  const date = new Date();
  const currrentTime = date.getHours();
  let greeting;

  const customColor = {
    color: ""
  };

  if (currrentTime < 12) {
    greeting = "Good Morning";
    customColor.color = "Yellow";
  } else if (currrentTime < 18) {
    greeting = "Good Evening";
    customColor.color = "blue";
  } else {
    greeting = "Good Night";
    customColor.color = "red";
  }

  return <h1 style={customColor}>Hellow {greeting}</h1>;
}

export default Heading;
