import { useState } from 'react'
import { createPortal } from 'react-dom'
import './App.css'
import SearchNotes from './components/SearchNotes'
import TotalNotes from './components/TotalNotes'
import ShowNotes from './components/ShowNotes'
import Modal from './components/Modal'
import AllNotes from './components/AllNotes'

function App() {
  
  const [showModal, setModal] = useState(false)

  return (
    <>
    <h1>Notebook App</h1>
    <SearchNotes />
    <TotalNotes />
    <ShowNotes />
    <button onClick={() => setModal(true)}>Add New Note</button>
    {showModal && createPortal(<Modal setModal={setModal}/>, document.getElementById("modal"))}
    <AllNotes />
    </>
  )
}

export default App
