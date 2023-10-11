import NotesList from "./components/NotesList";
import {useState} from "react";
import {nanoid} from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
  

  ]);

  const addNote = (text) => {
    //console.log(text);
    var head = text.toString();
    head = head.split(' ');
    const newNote = {
      id: nanoid(),
      heading: head[0] + ' '+head[1] +' '+ head[2],
      text: text
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className = "container">
      <NotesList 
        handleAddNote={addNote} 
        notes={notes} 
        handleDeleteNote={deleteNote}/>
    </div>

  );
};

export default App;
