 /* eslint-disable */ 
import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";


let newString = emojipedia.map(function (x) {
    return x.meaning.substring(0, 50);
  }); 

console.log(newString);
