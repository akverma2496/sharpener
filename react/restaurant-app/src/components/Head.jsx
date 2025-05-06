import React, { useState, useContext } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'
import styles from "./Head.module.css"
import { CartContext } from '../store/context'

const Head = (props) => {

  const cartItems = useContext(CartContext)
  const [showModal, setModal] = useState(false)

  const cartItemsHandler = () => {
    setModal(true)
  }

  return (
    <>
      <div className={styles.container}>

        <h1 className={styles.logo}>ReactMeals</h1>

        <button onClick={cartItemsHandler} className={styles.button}>
          <svg className={styles.icon}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
          </svg>
          Your Cart <span className={styles.cart}>{props.totalValue}</span>
        </button>

      </div>

      <img className={styles.image} src="../src/assets/meals.jpg" alt="meal" />

      <div className={styles.float}>
        <h1>Delicious Food, Delivered To you</h1><br />
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p><br />
        <p>All meals are cooked with high quality ingredients, just-in-time and of course by experienced chefs!</p>
      </div>

      {showModal && createPortal(<Modal setModal={setModal}
        cartItems={cartItems} setTotalValue={props.setTotalValue} />, document.getElementById("modal"))}

    </>
  )
}

export default Head