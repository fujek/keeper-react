import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App() {
    console.log(notes);
    return <div>
        <Header></Header>
        <div>
            {notes.map(note => <Note key={note.id} note={note}/>)}
        </div>
        <Footer></Footer>
    </div>
}

export default App;