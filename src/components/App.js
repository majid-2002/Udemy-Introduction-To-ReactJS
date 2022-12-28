import React, { useState } from "react";

function App() {
  const [headingtext, setHeading] = useState("Hello");
  const [isMouseOn, setMouseOver] = useState(false);

  function handleMouseon() {
    setMouseOver(true);
  }

  function handleMouseout() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingtext}</h1>
      <input type="text" placeholder="What's is your name?"></input>
      <button
        onClick={() => {
          setHeading("submittted");
        }}
        onMouseOver={handleMouseon}
        onMouseOut={handleMouseout}
        style={{ backgroundColor: isMouseOn ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
