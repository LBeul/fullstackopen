import React, { useState } from "react";

const App = () => {
  // Initilaize the component's state
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0170333555" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleFormSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>
            <strong>{person.name}</strong> {person.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
