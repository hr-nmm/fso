import { useState } from "react";
import Note from "./components/Note.jsx";

const App = (props) => {
  // States
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("a new note ...");
  const [showAll, setShowAll] = useState(true);
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  // event handler for submit
  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    setNotes(
      notes.concat({
        id: String(notes.length + 1),
        content: newNote,
        important: Math.random() < 0.5,
      })
    );
    setNewNote("");
  };
  // note change handler
  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
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
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <h2>Add Note</h2>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
