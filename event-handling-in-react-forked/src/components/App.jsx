import React, { useState } from "react";

function App() {
  const [isSubmitted, setSubmission] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [isMouseOut, setMouseOut] = useState(true);
  function handleClick() {
    setSubmission("submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{isSubmitted}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
