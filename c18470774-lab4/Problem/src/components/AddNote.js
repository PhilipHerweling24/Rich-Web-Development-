import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        //console.log(event.target.value);
        setNoteText(event.target.value);
        //setHeadingText(event.target.value);
    };


    const handleSaveClick = () => {
        handleAddNote(noteText);
    };

    return ( 
        <div className="new">
            
            <textarea 
                rows = "8" 
                cols = "10" 
                placeholder="Type note here!"
                value={noteText}
                onChange={handleChange}>
            </textarea>

            <div className="note-footer">
                <button className = "save-note" onClick={handleSaveClick}>save</button>
            </div>
        </div>
    );
};

export default AddNote;