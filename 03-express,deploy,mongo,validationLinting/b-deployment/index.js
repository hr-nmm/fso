// const http = require("http");
// let notes = [
//   {
//     id: "1",
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: "2",
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: "3",
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

// const PORT = 3001;
// app.listen(PORT);
// console.log(`server running on port${PORT}`);

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("dist"));
// data
let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true,
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];
app.use(cors());
app.use(express.json());

const requestLogger = (req, res, next) => {
  console.log("Method:", req.method);
  console.log("Path:  ", req.path);
  console.log("Body:  ", req.body);
  console.log("---");
  next();
};
app.use(requestLogger);
// fetch root
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
// fetch all
app.get("/api/notes", (request, response) => {
  response.json(notes);
});

// fetching single resource
app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((note) => note.id === id);
  note
    ? response.json(note)
    : response.status(404).end("<p>enter valid url</p>");
});

// deleting resources
app.delete("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

// post
const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0;
  return String(maxId + 1);
};

app.post("/api/notes", (request, response) => {
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  };
  notes = notes.concat(note);
  response.json(note);
});

// Custom Middleware
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `Servers running on port ${PORT}, and notes:${JSON.stringify(notes)} `
  );
});
