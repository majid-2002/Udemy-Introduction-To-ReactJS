/* eslint-disable */
import React from "react";

function App() {
  const [count, setcount] = React.useState(0);

  // function increase(){
  //   setcount(count+1);
  // }
  // function decrease(){
  //   setcount(count-1);
  // }

//** const [red , green, blue] = [250 , 60 , 7 ]  ----- this is destructuring in react , where we can acces the array element by a name */
 


  return (
    <div className="container">

      <h1>{count}</h1>

      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >+</button>

      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >-</button>

    </div>
  );
}

export default App;
