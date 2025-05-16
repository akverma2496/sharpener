import React, { useContext, useState, useEffect } from 'react'
import { NotesContext } from '../store/NotesProvider'

const SearchNotes = () => {

  const { setSearchTerm } = useContext(NotesContext)
  const [inputValue, setInputValue] = useState("")


  useEffect(() => {
      const timer = setTimeout(() => {
        console.log("you delayed typing")
        setSearchTerm(inputValue)
      },500)

      return () => {
        console.log("you are typing fast")
        clearTimeout(timer)
      }
    },[inputValue])
  
//4
  return (
    <>
      <label htmlFor="search">Search : </label>
      <input style={{"padding": "5px"}}
      id="search" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </>
  )
}

export default SearchNotes