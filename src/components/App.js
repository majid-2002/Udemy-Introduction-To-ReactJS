import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName : ""
  })

  
  function handleChange(event){ //* event is the event performed onChange of input element

    console.log(event.target) //* target is the input element of the event

    const {value , name } = event.target; //* destructuring objects from event.target "value" and "name"

    setFullName((prevValue) =>{
      if(name === "fName"){
        return{
          fName : value,
          lName : prevValue.lName
        };
      }else if(name === "lName"){
        return{
          fName : prevValue.fName,
          lName : value
        };
      }
    })
  }
  

  return(
    <div className="container">
    <form >
      <h1>Hello, {fullName.fName + " " + fullName.lName}</h1> 
      <input name="fName" placeholder="firstName" value={fullName.fName} onChange={handleChange}></input>
      <input name="lName" placeholder="lastName" value={fullName.lName} onChange={handleChange}></input>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default App;
