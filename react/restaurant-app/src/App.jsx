import { useState } from 'react'
import Head from './components/Head'
import AllMeals from './components/AllMeals'

function App() {

  const [cartVisibility, setCartVisibility] = useState(false)

  return (
    <>
      <Head onSetCartVisibility = {setCartVisibility}/>
      <AllMeals cartVisibility={cartVisibility} onSetCartVisibility = {setCartVisibility}/>
    </>
  )
}

export default App
