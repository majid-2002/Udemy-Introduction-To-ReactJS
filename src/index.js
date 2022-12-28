import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

//? Array destructuring
const [tesla, honda] = cars;

//? Object destructuring
const {
    speedStats: {
        topspeed: teslaTopSpeed 
    }
} = tesla;

//? Object destructuring with custome name
const {
    speedStats: {
        topspeed: hondaTopSpeed 
    }
} = honda;

const {
    colourByPopularity: [teslaTopColour]
} = tesla

const {
    colourByPopularity: [hondaTopColour]
} = honda



ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
            <th>Top Colour</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>

    </table>
    
    , document.getElementById("root"));