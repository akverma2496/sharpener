import React from 'react'

const Food = (props) => {
  return (
    <>
    <h2>Food</h2>
    <ul style={{listStyleType: "none", padding: "0px"}} >
      {
        props.food.length == 0 ?
        <h3 style={{backgroundColor: 'lightgrey', padding: "2rem"}}>No items added</h3> :
        props.food.map((item) => (
          <li key={item.productId}>{`${item.sellingPrice} Rs. - ${item.productName}`} <button onClick={() => props.delete(item.productId, "food")}>Delete</button> </li>
        ))
      }
    </ul>
    </>
    
  )
}

export default Food