
const Note = ({ id, heading, text, handleDeleteNote}) => {
    return (
    <div className="note">
            <div className = "note-header">
                <h1>{heading}</h1>
            </div>
            <span>{text}</span>
            <div className = "note-footer">
                <button className = "edit-note">Edit</button>
                <button className = "delete-note" onClick={() => handleDeleteNote(id)}>Delete</button>
            </div>   
        </div>
    );

};

export default Note;