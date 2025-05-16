import { useState } from 'react'
import { createPortal } from 'react-dom'
import SearchNotes from './components/SearchNotes'
import Modal from './components/Modal'
import AllNotes from './components/AllNotes'
import styles from "./App.module.css"
import NotesInfo from './components/NotesInfo'

function App() {

  const [showModal, setModal] = useState(false)

  return (
    <div className={styles.main}>
      <h1>Notebook App</h1>
      <SearchNotes />
      <NotesInfo />
      <button onClick={() => setModal(true)}>Add New Note</button>
      {showModal && createPortal(<Modal setModal={setModal} />, document.getElementById("modal"))}
      <AllNotes />
    </div>
  )
}

export default App
