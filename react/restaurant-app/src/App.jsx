import { useState } from 'react'
import Head from './components/Head'
import AllMeals from './components/AllMeals'

function App() {

  const [cartVisibility, setCartVisibility] = useState(false)
  const [totalValue, setTotalValue] = useState(0)
  const [cartItems, setCartItems] = useState({
    "Sushi":{
      name: "Sushi",
      total: 0,
      price: 22.99
    },
    "Schnitzel": {
      name: "Schnitzel",
      total: 0, 
      price: 16.50
    },
    "Barbeque Burger": {
      name: "Barbeque Burger",
      total: 0, 
      price: 12.99
    },
    "Green Bowl": {
      name: "Green Bowl",
      total: 0, 
      price: 10.50
    }
})

return (
  <>
    <Head onSetCartVisibility = {setCartVisibility} totalValue = {totalValue}/>
    <AllMeals 
    cartVisibility={cartVisibility} 
    onSetCartVisibility = {setCartVisibility} 
    cartItems = {cartItems}
    setCartItems={setCartItems}
    totalValue={totalValue}
    setTotalValue={setTotalValue}
    />
  </>
  )
}

export default App
