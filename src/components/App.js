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

  function deleteItem(passedindex){
    setItem((prevValue) => {
      return prevValue.filter((val, index) => { //* filter the array elements where index != the passed index
        return index != passedindex;
      })
    })
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
          {items.map((item, index) => 
          <Todoitem key={index} id={index} listitem={item} checkedItem={deleteItem}/> //* pass a function called deleteItem as prompt to checkeditem
          )
          } 
        </ul>
      </div>
    </div>
  );
}

export default App;
