import React, { useState, useEffect } from "react";
import axios from "axios";

import EntryForm from "./Components/EntryForm";
import ListOfEntries from "./Components/ListOfEntries";

const App = () => {
  // Initilaize the component's state
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // Data fetch
  useEffect(() => {
    console.log("Effect");

    axios.get("http://localhost:3001/persons").then(response => {
      console.log("response fulfilled");
      setPersons(response.data);
    });
  }, []);

  // Log amount of persons to render
  console.log(`Render ${persons.length} persons`);

  // Input handlers
  const handleNameChange = event => {
    console.log("name:", event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    console.log("number:", event.target.value);
    setNewNumber(event.target.value);
  };

  // Submit handler
  const handleFormSubmit = event => {
    event.preventDefault();

    // Check if unique
    let personIsUnique = false;
    let numberIsUnique = false;
    if (persons.filter(item => item.name === newName).length === 0) {
      personIsUnique = true;
    }
    if (persons.filter(item => item.number === newNumber).length === 0) {
      numberIsUnique = true;
    }

    // If person & number are unique...
    if (personIsUnique && numberIsUnique) {
      // ...add the new person object
      const nameObject = {
        name: newName,
        number: newNumber
      };
      setPersons(persons.concat(nameObject));
    } else if (!personIsUnique) {
      // Feedback if person already exists
      alert(`Sorry, but ${newName} is already added to phonebook.`);
    } else if (!numberIsUnique) {
      // Feedback if number already exists
      alert(`Sorry, but ${newNumber} is already assigned to someone else.`);
    }
    // Clear inout fields afterwards
    setNewName("");
    setNewNumber("");
  };

  // Render the app component
  return (
    <>
      <h2>Phonebook</h2>
      <EntryForm
        nameValue={newName}
        nameChangeHandler={handleNameChange}
        numberValue={newNumber}
        numberChangeHandler={handleNumberChange}
        submitHandler={handleFormSubmit}
      />
      <ListOfEntries list={persons} />
    </>
  );
};

export default App;
