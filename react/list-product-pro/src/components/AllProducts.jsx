import React from 'react'
import Food from './Food'
import Electronics from './Electronics'
import SkinCare from './SkinCare'
import styles from "./AllProducts.module.css"

const AllProducts = (props) => {
  return (
    <div className={styles.container}>
    <h1>All Products</h1>
    <hr />
    <Electronics electronics={props.allItems.electronics} delete={props.delete}/>
    <hr />
    <SkinCare skincare={props.allItems.skinCare} delete={props.delete}/>  
    <hr />  
    <Food food={props.allItems.food} delete={props.delete}/>
    </div>
  )
}

export default AllProducts