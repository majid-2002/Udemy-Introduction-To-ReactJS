/* eslint-disable */
import React, { useState } from "react";

function App() {

  const [contact, setContact] = useState({
    //* initial values
    fName: "",
    lName: "",
    email: ""
  });


  function handleChange(event){

    const {name, value} = event.target; //* get the event source (button) name and value 


    setContact(function (prevValue) {  //* call the set contact method of useState
      return{
        ...prevValue, //* spread operator in javascript to access all the values inside a object
        [name]: value
      }
     })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChange} value={contact.fName}/>
        <input name="lName" placeholder="Last Name" onChange={handleChange} value={contact.lName}/>
        <input name="email" placeholder="Email" onChange={handleChange} value={contact.email}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
