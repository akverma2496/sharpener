import React, { useContext } from 'react'
import { NotesContext } from '../store/NotesProvider'

const NotesInfo = () => {
  const {notes, filteredNotes} = useContext(NotesContext)

  return (
    
      <div>
        <p>Total Notes - {notes.length}</p>
        <p>Showing Notes - {filteredNotes.length}</p>
      </div>
    
  )
}

export default NotesInfo