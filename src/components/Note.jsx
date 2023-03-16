import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    const {note, onDelete} = props;
    return <div className='note'>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button onClick={() => onDelete(note)}><DeleteIcon/></button>
    </div>
}

export default Note;