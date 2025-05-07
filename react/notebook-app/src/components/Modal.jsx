import React, { useContext, useState } from 'react'
import styles from "./Modal.module.css"
import { NotesContext } from '../store/NotesProvier'

const Modal = (props) => {

    const { addNote } = useContext(NotesContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addNoteHandler = () => {
        addNote(title, description)
        props.setModal(false)
    }

  return (
    <div className={styles.outer}>
        <div className={styles.inner}>
            <h3>Add New Note</h3>
            <div>
                <label htmlFor="title">Note Title</label>
                <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="desc">Description</label>
                <textarea name="description" id="desc" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button onClick={() => props.setModal(false)}>Close</button>
                <button onClick={addNoteHandler} id="add">Add</button>
            </div>
        </div>
    </div>
  )
}

export default Modal