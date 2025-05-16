import React, { createContext, useState } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  
  const [notes, setNotes] = useState([
    // { id: 1, title: 'Note 1', description: 'This is the first note.' },
    // { id: 2, title: 'Note 2', description: 'This is the second note.' },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  const addNote = (title, description) => {
    setNotes((prevNotes) => [...prevNotes, {
      id: Math.random().toString(),
      title: title,
      description: description
    }])
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <NotesContext.Provider value={{notes, deleteNote, addNote, searchTerm, setSearchTerm, filteredNotes}}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
