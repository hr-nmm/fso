import { useState, useEffect } from "react";
import Note from "./components/Note.jsx";
import noteService from "./services/notes.js";

const App = () => {
  // States
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note ...");
  const [showAll, setShowAll] = useState(true);
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  // fetching data from json-server
  useEffect(() => {
    console.log("effect");
    noteService.getAll().then((response) => {
      console.log("promise fulfilled");
      setNotes(response);
    });
  }, []);
  console.log("render", notes.length, "notes");

  // event handler for submit
  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const newNoteObject = {
      // id: String(notes.length + 1),
      content: newNote,
      important: Math.random() < 0.5,
    };

    noteService.create(newNoteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response));
      setNewNote("");
    });
  };
  // note change handler

  // toggle importance of notes button onClick event handler
  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((response) => {
        setNotes(notes.map((n) => (n.id !== id ? n : response)));
      })
      .catch((error) => {
        alert(`the note '${note.content}' was already deleted from server`);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>

      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <h2>Add Note</h2>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={(event) => {
            setNewNote(event.target.value);
          }}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
