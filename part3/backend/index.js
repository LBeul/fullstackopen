// Import and initialize express & morgan
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(morgan("tiny"));

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

// Eventhandler for req all persons data
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

// Event handler for req a single person
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  // Find requested person
  const requestedPerson = persons.find((person) => person.id === id);
  // Respond based on validity of given id
  if (requestedPerson) {
    res.json(requestedPerson);
  } else {
    res.status(404).end();
  }
});

// Create a random ID
const getRandomID = () => {
  return Math.floor(Math.random() * 1000000);
};

// Eventhandler for adding a person
app.post("/api/persons", (request, response) => {
  const body = request.body;

  // Check if posted data is complete
  if (!body.name || !body.number) {
    console.log("--> NOT OK: Dataset incomplete");
    return response
      .status(400)
      .json({ error: "Number and name are required!" });
  }

  // Check if name isn't already in phonebook

  if (persons.find((person) => person.name === body.name)) {
    return response.status(400).json({ error: "Name is already in phonebook" });
  }
  // Create new Person based on posted data
  const newPerson = {
    name: body.name,
    number: body.number,
    id: getRandomID(),
  };
  // Add new person to phonebook
  persons = persons.concat(newPerson);
  // Respond with person object
  response.json(newPerson);
});

// Eventhandler for deleting given person
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

// Eventhandler for req dataset info
app.get("/info", (req, res) => {
  const numOfPersons = persons.length;
  const timestamp = new Date();
  res.send(
    `<p>Phonebook has info for ${numOfPersons} people</p> <p>${timestamp}</p>`
  );
});

// Handle unknown route
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

// Tell server to listen to PORT
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
