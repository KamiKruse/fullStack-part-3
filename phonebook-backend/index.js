const express = require("express");
const server = express();
const persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
const date = new Date();
const body = `
<div>Phonebook has info for ${persons.length} persons</div>
<br>
<div>${date.toString()}</div>
`;
server.get("/", (req, res) => {
  res.send("<div>Hello from express</div>");
});

server.get("/api/persons", (req, res) => {
  res.json(persons);
});
server.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((entry) => entry.id === id);
  if (person) {
    res.json(person);
  } else {
    res.statusMessage = "Person not found in the phonebook";
    res.status(404).end();
  }
});

server.get("/api/info", (req, res) => {
  res.send(body);
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`listening on Port: ${PORT}`);
});
