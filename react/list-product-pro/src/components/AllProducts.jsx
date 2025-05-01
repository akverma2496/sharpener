import React from 'react'
import Food from './Food'
import Electronics from './Electronics'
import SkinCare from './SkinCare'

const AllProducts = (props) => {
  return (
    <>
    <h1>All Products</h1>
    <Electronics electronics={props.allItems.electronics}/>
    <SkinCare skincare={props.allItems.skinCare}/>    
    <Food food={props.allItems.food} />
    </>
  )
}

export default AllProducts