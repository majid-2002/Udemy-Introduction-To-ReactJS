import React from "react";
import ReactDOM from "react-dom";

// Here we create it as a function then export
function List() {
  let name = "Nothing";

  return (
    <ul>
      <li>List {name} </li>
      <li>List two </li>
      <li>List three </li>
      <li>List Four</li>
    </ul>
  );
}

export default List;
