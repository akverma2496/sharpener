import React from 'react'
import styles from "./Head.module.css"

const Head = (props) => {
  
  const cartItemsHandler = () => {
    props.onSetCartVisibility(true)
  }

  return (
    <>
    <div className={styles.container}>
        <h1 className={styles.logo}>ReactMeals</h1>
        <button onClick={cartItemsHandler}className={styles.button}>Your Cart {0}</button>
    </div>
    <img className={styles.image} src="../src/assets/meals.jpg" alt="meal" />
    <div className={styles.float}>
      <h1>Delicious Food, Delivered To you</h1><br />
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p><br />
      <p>All meals are cooked with high quality ingredients, just-in-time and of course by experienced chefs!</p>
    </div>
    </>
  )
}

export default Head