import React, { useState } from "react";

const App = () => {
  // Initilaize the component's state
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // Event handlers
  const handleNameChange = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNameSubmit = event => {
    event.preventDefault();
    if (persons.filter(item => item.name === newName).length > 0) {
      alert(`Sorry, but ${newName} is already added to phonebook.`);
    } else {
      const nameObject = {
        name: newName,
        id: newName
      };

      setPersons(persons.concat(nameObject));
    }
    setNewName("");
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
          <button type="submit" onClick={handleNameSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
