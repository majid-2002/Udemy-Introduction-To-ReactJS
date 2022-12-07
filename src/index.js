import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

var date = new Date();
var hours = date.getHours();

var DayTime = null;

var customStyle = {
  color: "black"
};

if (hours <= 12) {
  DayTime = "GoodMorning";
  customStyle.color = "red";
} else if (hours <= 18) {
  DayTime = "GoodAfternoon";
  customStyle.color = "green";
} else if (hours <= 23) {
  DayTime = "GoodEvening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Hello {DayTime}
  </h1>,
  document.getElementById("root")
);
