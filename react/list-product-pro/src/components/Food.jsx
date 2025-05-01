import React from 'react'

const Food = (props) => {
  return (
    <>
    <h2>Food</h2>
    <ul>
      {
        props.food.map((item) => (
            <li key={item.productId}>{`${item.sellingPrice} - ${item.productName}`}</li>
        ))
      }
    </ul>
    </>
    
  )
}

export default Food