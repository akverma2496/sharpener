import React from 'react'

const Electronics = (props) => {

  return (
    <>
      <h2>Electronics</h2>
      <ul style={{listStyleType: "none", padding: "0px"}}>
        { 
          props.electronics.length == 0 ?
          <h3 style={{backgroundColor: 'lightgrey', padding: "2rem"}}>No items added</h3> :
          props.electronics.map((item) => (
            <li key={item.productId}>{`${item.sellingPrice} Rs. - ${item.productName}`} <button onClick={() => props.delete(item.productId, "electronics")}>Delete</button> </li>
          ))
      
          
        }
      </ul>
    </>

  )
}

export default Electronics