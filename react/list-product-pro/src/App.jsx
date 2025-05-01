import { useState } from 'react'
import ProductEntry from './components/ProductEntry'
import AllProducts from './components/AllProducts'
import './App.css'

function App() {

  const [allItems, setAllItems] = useState({
    electronics: [],
    skinCare: [],
    food: []  
  })

  const allItemsHandler = (item) => {
    setAllItems((prevItem) => {

      if(item.category === "electronics") {
        return {...prevItem, electronics: [...prevItem.electronics, item]}
      }
      else if(item.category === "skin-care") {
        return {...prevItem, skinCare: [...prevItem.skinCare, item]}
      }
      else{
        return {...prevItem, food: [...prevItem.food, item]}
      }
    })
  }

  console.log(allItems)
  return (
    <>
      <ProductEntry onItemChange={allItemsHandler}/>
      <AllProducts allItems={allItems}/> 
    </>
  )
}

export default App
