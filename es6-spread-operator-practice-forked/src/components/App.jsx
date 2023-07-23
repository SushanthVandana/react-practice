import React, { useState } from "react";

function App() {
  const [arrHelp, setArrHelp] = useState([]);
  const [listItem, setListItem] = useState("");
  function handleChange(event) {
    setListItem(event.target.value);
  }

  function handleClick() {
    setArrHelp((prevItem) => {
      return [...prevItem, listItem];
    });
    console.log(arrHelp);
    setListItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arrHelp.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
