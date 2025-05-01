import React, {useState} from 'react'

const ProductEntry = (props) => {

  const [item, setItem] = useState({
    productId: "",
    sellingPrice: "",
    productName: "",
    category: "electronics"
  })

  const productIdHandler = (e) => {
    setItem((prevItem) => {
      return {...prevItem, productId: e.target.value}
    })
  }

  const sellingPriceHandler = (e) => {
    setItem((prevItem) => {
      return {...prevItem, sellingPrice: e.target.value}
    })
  }

  const productNameHandler = (e) => {
    setItem((prevItem) => {
      return {...prevItem, productName: e.target.value}
    })
  }

  const categoryHandler = (e) => {
    setItem((prevItem) => {
      return {...prevItem, category: e.target.value}
    })
  }

  const fromSubmitHandler = (e) => {
    e.preventDefault();
    console.log(item)
    props.onItemChange(item)
  }

  return (
    <form onSubmit={fromSubmitHandler}>
      <label htmlFor='pid'>Product ID</label>
      <input type="text" name="pid"  required onChange={productIdHandler}/>

      <label htmlFor='sell-price'>Selling Price</label>
      <input type="number" name="sell-price" required onChange={sellingPriceHandler} />

      <label htmlFor='pro-name'>Product Name</label>
      <input type="text" name="pro-name" required onChange={productNameHandler}/>

      <label>Choose a category : </label>
      <select  value={item.category} name="category" id="category" required onChange={categoryHandler}>
        <option value="electronics">Electronics</option>
        <option value="skin-care">Skin Care</option>
        <option value="food">Food</option>
      </select>
  
      <button type='submit'>Add</button>
    </form>
  )
}

export default ProductEntry