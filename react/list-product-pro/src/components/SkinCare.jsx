import React from 'react'

const SkinCare = (props) => {
  return (
    <>
    <h2>Skin Care</h2>
    <ul>
      {
        props.skincare.map((item) => (
            <li key={item.productId}>{`${item.sellingPrice} - ${item.productName}`}</li>
        ))
      }
    </ul>
    </>
  )
}

export default SkinCare