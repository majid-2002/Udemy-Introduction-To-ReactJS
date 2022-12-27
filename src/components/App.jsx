/* eslint-disable */
import React, {useState} from "react";

function App() {

  setInterval(updateTime,1000)
  const now = new Date().toLocaleTimeString().substring(0, 8);
  
  const [time, timeset] = useState(now);

  function updateTime(time){
    const newtime = new Date().toLocaleTimeString().substring(0, 8);
    timeset(newtime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
