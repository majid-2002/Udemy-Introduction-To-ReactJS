import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} style={props.style} />
      <p>{props.email}</p>
    </div>
  );
}

let customstyle = {
  height : "300px",
  width: "240px"
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Card
      name="Beyonce"
      src="https://www.shutterstock.com/image-photo/los-angeles-feb-10-beyonce-260nw-1129097897.jpg"
      email="beyonce@mail.com"
    ></Card>
    <br></br>
    <Card
      name="Justin Bieber"
      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSqoSEuV0lmNrEVLwJ6q75DaOWQjorN0b2G_BLJr4OScCX0YSZ"
      email="justin@mail.com"
    ></Card>
    <br></br>
    <Card
      name="Eminem"
      src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQjVCJMbseIAEjcb1XuiGMc87zPg0WFJTeJ7frMFIGTBM5ul7VRr8CAiCZHvyxif6IJKs0dzuCPYGZjXZE"
      email="eminem@mail.com"
      style={customstyle}
     
    ></Card>
  </div>
);
