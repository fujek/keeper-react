import React from 'react';
function Note(props) {
    const note = props.note;
    return <div className='note'>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
    </div>
}

export default Note;