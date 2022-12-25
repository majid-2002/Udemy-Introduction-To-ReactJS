import React from "react";
import Card from "./Card";
import contacts from "../contact";


function createCard(contact){
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      id={contact.id}
    />
  )
}



function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* map or loop the contacts with create card function*/}
      {contacts.map(createCard)} 
    </div>
  );
}

export default App;
