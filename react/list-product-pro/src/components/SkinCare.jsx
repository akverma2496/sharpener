import React from 'react'

const SkinCare = (props) => {
  return (
    <>
    <h2>Skin Care</h2>
    <ul style={{listStyleType: "none", padding: "0px"}} >
      {
        props.skincare.length == 0 ?
        <h3 style={{backgroundColor: 'lightgrey', padding: "2rem"}}>No items added</h3> :
        props.skincare.map((item) => (
          <li key={item.productId}>{`${item.sellingPrice} Rs. - ${item.productName}`} <button onClick={() => props.delete(item.productId, "skinCare")}>Delete</button> </li>
        ))
      }
    </ul>
    </>
  )
}

export default SkinCare