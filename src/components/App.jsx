/* eslint-disable */
import { render } from "@testing-library/react";
import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login></Login>;
//   }
// }

function App() {
  return <div className="container">{
    isLoggedIn ? <h1>Hellow</h1> : <Login />
  }</div>;
}

export default App;
