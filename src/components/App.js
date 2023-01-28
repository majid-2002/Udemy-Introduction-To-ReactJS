/* eslint-disable */
import React, { useState } from "react";
import Todoitem from "./todoitem";


function App() {

  const [items, setItem] = useState([]);
  const [input, setInput] = useState("");


  function handleChange(event){
    setInput(event.target.value);
  }

  function handleClick(){
    setItem([...items, input]);
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={input}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {items.map(item => 
          <Todoitem listitem={item} />
          )
          } 
        </ul>
      </div>
    </div>
  );
}

export default App;
