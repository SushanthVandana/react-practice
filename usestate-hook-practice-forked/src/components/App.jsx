import React, { useState } from "react";

function App() {
  let present = new Date().toLocaleTimeString();
  const [time, setTime] = useState(present);
  function helper() {
    let time2 = new Date().toLocaleTimeString();
    setTime(time2);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={helper}>Get Time</button>
    </div>
  );
}

export default App;
