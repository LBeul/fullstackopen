// Import and initialize express
const express = require("express");
const app = express();

// Persons data
let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Harry Potter",
    number: "01805-66666",
    id: 4,
  },
  {
    name: "Ron Weasley",
    number: "0900-77777",
    id: 5,
  },
  {
    name: "Hermione Granger",
    number: "0850-555666",
    id: 6,
  },
];

// Event Handler for root route
app.get("/", (req, res) => {
  res.send("<h1>Phonebook API</h1>");
});

// event handler for persons data
app.get("/api/persons", (req, res) => {
  console.log("Request to 'api/persons'");
  res.json(persons);
});

app.get("/info", (req, res) => {
  console.log("Request to '/info'");
  const numOfPersons = persons.length;
  const timestamp = new Date();

  res.send(
    `<p>Phonebook has info for ${numOfPersons} people</p> <p>${timestamp}</p>`
  );
});

// Tell server to listen to PORT
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
