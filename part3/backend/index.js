// Import and initialize express
const express = require("express");
const app = express();
app.use(express.json());

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

// Eventhandler for root route
app.get("/", (req, res) => {
  res.send("<h1>Phonebook API</h1>");
});

// Eventhandler for req all persons data
app.get("/api/persons", (req, res) => {
  console.log("GET '/api/persons'");
  res.json(persons);
});

// Event handler for req a single person
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(`GET '/api/persons/${id}'`);
  // Find requested person
  const requestedPerson = persons.find((person) => person.id === id);
  // Respond based on validity of given id
  if (requestedPerson) {
    res.json(requestedPerson);
    console.log("--> OK: Responded with data");
  } else {
    res.status(404).end();
    console.log("--> NOT OK: Responded 404");
  }
});

// Eventhandler for deleting given person
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  console.log(`DELETE '/api/persons/${id}'`);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

// Eventhandler for req dataset info
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
