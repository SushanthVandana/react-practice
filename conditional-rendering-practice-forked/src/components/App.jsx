import React from "react";
import Form from "./Form";
import Button from "./Button";
import Input from "./Input";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button text="Login" />
        </form>
      ) : (
        <form className="form">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Button text="Register" />
        </form>
      )}
    </div>
  );
}

export default App;
