import React, { useContext, useState } from 'react'
import styles from "./Modal.module.css"
import { NotesContext } from '../store/NotesProvider'

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
            <form className={styles.group} id='form' onSubmit={addNoteHandler}>
                <label htmlFor="title">Note Title</label>
                <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <br />
                <label htmlFor="desc">Description</label>
                <textarea name="description" id="desc" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            </form>
            <br />
            <div>
                <button onClick={() => props.setModal(false)}>Close</button>
                <button form="form" type="submit">Add</button>
            </div>
        </div>
    </div>
  )
}

export default Modal