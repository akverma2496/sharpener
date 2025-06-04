import { useState } from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import { useSelector } from 'react-redux'
import Profile from './components/Profile'

function App() {
  
  const auth = useSelector((state) => state.auth.isAuthenticated)
  return (
    <>
    <Header />
    {!auth ? <LoginForm /> : <Profile  /> }
    <Counter />
    </>
  )
}

export default App
