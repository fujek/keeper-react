import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteEditor from "./NoteEditor";


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes(oldNotes => [...oldNotes, note]);
    }

    function deleteNote(note) {
        setNotes(oldNotes => oldNotes.filter(n => n !== note))
    }

    return <div>
        <Header/>
        <div>
            <NoteEditor onAdd={addNote}/>
        </div>
        <div>
            {notes.map((note, idx) => <Note key={idx} note={note} onDelete={deleteNote}/>)}
        </div>
        <Footer/>
    </div>
}

export default App;