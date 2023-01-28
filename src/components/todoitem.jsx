import React from "react";

function Todoitem(props) {
  return (
    /* pass the checked item function with the id as the argument which is 
    then passed to the deleteItem function in App.js */
    <div onClick={() => {
      props.checkedItem(props.id) 
    }}>
      <li>{props.listitem}</li>
    </div>
  );
}

export default Todoitem;
