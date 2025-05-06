import { useState } from 'react'
import Head from './components/Head'
import AllMeals from './components/AllMeals'


function App() {

  const [totalValue, setTotalValue] = useState(0)

  return (
    <>
      <Head totalValue = {totalValue} setTotalValue={setTotalValue} />
      <AllMeals setTotalValue={setTotalValue} />
    </>
  )
}

export default App
