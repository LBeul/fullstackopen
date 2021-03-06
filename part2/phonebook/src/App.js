import React, { useState, useEffect } from "react";
import "./styles.css";

// Import custom components
import EntryForm from "./Components/EntryForm";
import Entry from "./Components/Entry";
import Notification from "./Components/Notification";

// Import services
import personService from "./services/persons";

const App = () => {
  // Initilaize the component's state
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({ name: "", number: "" });
  const [successMessage, setSuccessMessage] = useState(null);

  // Data fetch
  useEffect(() => {
    personService.getAll().then(allPersons => {
      setPersons(allPersons);
    });
  }, []);

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
      personService.create(personObject).then(addedPerson => {
        setPersons(persons.concat(addedPerson));
      });
      // Give some nice feedback
      setSuccessMessage(
        `${newPerson.name} with the number ${newPerson.number} was succesfully added!`
      );
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
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

  const deleteEntryOf = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService.deleteItem(id).then(response => {
        console.log(response);
        setPersons(persons.filter(person => person.id !== id));
      });
    }
  };

  // Render the app component
  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={successMessage} />
      <EntryForm
        nameValue={newPerson.name}
        nameChangeHandler={handleNameChange}
        numberValue={newPerson.number}
        numberChangeHandler={handleNumberChange}
        submitHandler={handleFormSubmit}
      />
      <h3>Numbers</h3>
      <ul>
        {persons.map(person => (
          <Entry
            key={person.id}
            entry={person}
            deleteEntry={() => deleteEntryOf(person.id, person.name)}
          />
        ))}
      </ul>
    </>
  );
};

export default App;
