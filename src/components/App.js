import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("")
  const [h1value , setH1value] = useState("")


  function handlInput(event){
    setInputValue(event.target.value)
  }
  
  function handleSubmit(event){
    setH1value(inputValue)
    event.preventDefault(); //* to prevent default behavior when submit button is clicked
  }

  return(
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h1>Hello {h1value}</h1>
      <input placeholder="what is your name?" value={inputValue} onChange={handlInput}></input>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App;
