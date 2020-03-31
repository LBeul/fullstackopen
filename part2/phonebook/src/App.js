import React, { useState, useEffect } from "react";
import axios from "axios";

import EntryForm from "./Components/EntryForm";
import ListOfEntries from "./Components/ListOfEntries";

const App = () => {
  // Initilaize the component's state
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });

  // Data fetch
  useEffect(() => {
    console.log("Effect");

    axios.get("http://localhost:3001/persons").then(response => {
      console.log("Response fulfilled");
      setPersons(response.data);
    });
  }, []);

  // Log amount of persons to render
  console.log(`There's a total of ${persons.length} persons`);

  // Handle name input
  const handleNameChange = event => {
    setNewPerson({ ...newPerson, name: event.target.value });
  };
  // Handle number input
  const handleNumberChange = event => {
    setNewPerson({ ...newPerson, number: event.target.value });
  };

  // Submit handler
  const handleFormSubmit = event => {
    event.preventDefault();

    // Check if unique
    let personIsUnique,
      numberIsUnique = false;
    if (!persons.find(item => item.name === newPerson.name)) {
      personIsUnique = true;
    }
    if (!persons.find(item => item.number === newPerson.number)) {
      numberIsUnique = true;
    }

    // If person & number are unique...
    if (personIsUnique && numberIsUnique) {
      // ...create new person Object,...
      const personObject = {
        name: newPerson.name,
        number: newPerson.number
      };
      // ...post it to the server...
      axios
        .post("http://localhost:3001/persons", personObject)
        .then(response => {
          console.log(response);
          //  ...and add it to the local state
          setPersons(persons.concat(response.data));
        });
    } else if (!personIsUnique) {
      // Feedback if person already exists
      alert(`Sorry, but ${newPerson.name} is already added to phonebook.`);
    } else if (!numberIsUnique) {
      // Feedback if number already exists
      alert(
        `Sorry, but ${newPerson.number} is already assigned to someone else.`
      );
    }
    // Clear input fields afterwards
    setNewPerson({ name: "", number: "" });
  };

  // Render the app component
  return (
    <>
      <h2>Phonebook</h2>
      <EntryForm
        nameValue={newPerson.name}
        nameChangeHandler={handleNameChange}
        numberValue={newPerson.number}
        numberChangeHandler={handleNumberChange}
        submitHandler={handleFormSubmit}
      />
      <ListOfEntries list={persons} />
    </>
  );
};

export default App;
