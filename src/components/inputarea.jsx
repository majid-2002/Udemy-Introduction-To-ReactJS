/* eslint-disable */
import React, { useState } from "react";

function Inputarea(props) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={input} />
      <button
        onClick={() => {
          props.addItem(input);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Inputarea;
