import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        imgsrc={contacts[0].imgURL}
        imgalt={contacts[0].name}
        phno={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        imgsrc={contacts[1].imgURL}
        imgalt={contacts[1].name}
        phno={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        imgsrc={contacts[2].imgURL}
        imgalt={contacts[2].name}
        phno={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
