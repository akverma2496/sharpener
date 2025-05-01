import React from 'react'

const Electronics = (props) => {
  return (
    <>
    <h2>Electronics</h2>
    <ul>
      {
        props.electronics.map((item) => (
            <li key={item.productId}>{`${item.sellingPrice} - ${item.productName}`}</li>
        ))
      }
    </ul>
    </>
    
  )
}

export default Electronics