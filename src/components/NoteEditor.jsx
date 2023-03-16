import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
function NoteEditor(props) {
    const [note, setNote] = useState({title: '', content: ''});
    const [isExpanded, setExpanded] = useState(false);

    function onInputChange (event) {
        const {name, value } = event.target;
        setNote(oldNote => ({...oldNote, [name]: value}))
    }

    function addNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({title: '', content: ''})
    }


    function expand() {
        setExpanded(true);
    }

    return <div>
        <form>
            {isExpanded && <input name='title' value={note.title}  onChange={onInputChange} type="text" placeholder='Title'/>}
        <textarea  name='content' onClick={expand} rows={isExpanded ? 3 : 1} onChange={onInputChange}  value={note.content} placeholder='Take a note'/>
        <button type='submit' onClick={addNote}><AddIcon/></button>
        </form>
    </div>
}

export default NoteEditor;