import React, {useContext} from 'react'
import { NotesContext } from '../store/NotesProvier';

const AllNotes = () => {

    const { notes, deleteNote } = useContext(NotesContext);

    const deleteHandler = (event) => {
        deleteNote(event.target.id)
    }

  return (
    <div>
        <ul>
            {
                notes.map((note) => (
                    <div>
                        <h3>{note.title}</h3>
                        <h4>{note.description}</h4>
                        <button id={note.id} onClick={deleteHandler}>Delete</button>
                    </div>
                ))
            }
            
        </ul>
    </div>
  )
}

export default AllNotes