import React from "react";
import { ReactDOM } from "react-dom";
import List from "./List";
import Heading from "./Heading";

let name = "Majid";
const customStyle = {
  color: "red",
  fontSize: "50px"
};

let newColor = (customStyle.color = "blue");

function App() {
  return (
    <div>
      <h1 style={customStyle}>{name}</h1>
      <Heading></Heading>
      <List></List>
      <List></List>
    </div>
  );
}

export default App;
