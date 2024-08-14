// Imports
import { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";
import axios from "axios";

const App = () => {
  // States
  const [persons, setPersons] = useState([]); // for controlling form submission
  const [newName, setNewName] = useState(""); // for controlling the form input of name
  const [newNumber, setNewNumber] = useState(NaN); // for controlling the form input of number
  const [personsToShow, setPersonsToShow] = useState([]); // for controlling state of what to render

  // fetching personsDB from server using hook useEffect
  useEffect(() => {
    console.log(`effect`);
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled", response);
      setPersons(response.data);
      setPersonsToShow(response.data);
    });
  }, []);
  console.log("render", persons.length, "notes");

  return (
    <div>
      <h1>PhoneBook</h1>
      <Filter persons={persons} setPersonsToShow={setPersonsToShow}></Filter>
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setPersonsToShow={setPersonsToShow}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
