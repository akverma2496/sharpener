import React, {useContext} from 'react'
import { NotesContext } from '../store/NotesProvider';
import styles from "./AllNotes.module.css"

const AllNotes = () => {

    const { notes, deleteNote, filteredNotes, searchTerm } = useContext(NotesContext);

    const deleteHandler = (event) => {
        deleteNote(event.target.id)
    }

    const notesToRender = searchTerm ? filteredNotes : notes;

  return (
    <div>
        <ul className={styles.container}>
            {
                
                notesToRender.map((note) => (
                    <div className={styles.noteDiv} key={note.id}>
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