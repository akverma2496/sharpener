import React from 'react'
import styles from "./Head.module.css"

const Head = () => {
  return (
    <>
    <div className={styles.container}>
        <h1 className={styles.logo}>ReactMeals</h1>
        <button className={styles.button}>Your Cart {0}</button>
    </div>
    <img className={styles.image} src="../src/assets/meals.jpg" alt="meal" />
    </>
  )
}

export default Head