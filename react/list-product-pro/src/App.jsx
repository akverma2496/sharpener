import { useState } from 'react'
import ProductEntry from './components/ProductEntry'
import AllProducts from './components/AllProducts'
import './App.css'

function App() {

  let storage = JSON.parse(localStorage.getItem("allItems"))

  const initialItems = {
    electronics: storage?.electronics || [],
    skinCare: storage?.skinCare || [],
    food: storage?.food || []  
  }

  const [allItems, setAllItems] = useState(initialItems)

  const allItemsHandler = (item) => {
    setAllItems((prevItem) => {

      if(item.category === "electronics") {
        localStorage.setItem("allItems", JSON.stringify({...prevItem, electronics: [...prevItem.electronics, item]}))
        return {...prevItem, electronics: [...prevItem.electronics, item]}
      }
      else if(item.category === "skin-care") {
        localStorage.setItem("allItems", JSON.stringify({...prevItem, skinCare: [...prevItem.skinCare, item]}))
        return {...prevItem, skinCare: [...prevItem.skinCare, item]}
      }
      else{
        localStorage.setItem("allItems", JSON.stringify({...prevItem, food: [...prevItem.food, item]}))
        return {...prevItem, food: [...prevItem.food, item]}
      }
    })
  }

  const deleteHandler = (id, category) => {

      let data = JSON.parse(localStorage.getItem("allItems"))
      let result = data[category].filter((item) => item.productId != id)

      setAllItems((prevItem) => {
        if(category == "electronics"){
          localStorage.setItem("allItems", JSON.stringify({...prevItem, electronics: result}))
          return {...prevItem, electronics: result}
        }
        else if (category == "skinCare"){
          localStorage.setItem("allItems", JSON.stringify({...prevItem, skinCare: result}))
          return {...prevItem, skinCare: result}
        }
        else{
          localStorage.setItem("allItems", JSON.stringify({...prevItem, food: result}))
          return {...prevItem, food: result}
        }
      })

  }

  return (
    <>
      <ProductEntry onItemChange={allItemsHandler}/>
      <AllProducts allItems={allItems} delete={deleteHandler}/> 
    </>
  )
}

export default App