import React from 'react'
import styles from "./Modal.module.css"
import { Fragment } from 'react'

const Modal = (props) => {

  const global = props.cartItems.byId   // object from global

  const addOneHandler = (e) => {
    (global[e.target.id].total)++
    props.setTotalValue((prevState) => prevState + 1)
  }

  const lessOneHandler = (e) => {
    (global[e.target.id].total)--
    props.setTotalValue((prevState) => prevState - 1)
  }

  const placeOrder = () => {
    Object.values(global).forEach((value) => value.total = 0)
    props.setTotalValue(0)
    props.setModal(false);
  }

  let totalBill = 0;
  Object.values(global).forEach((val) => totalBill += (val.total * val.price))

  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>

        {/* logic of map */}
        {
          props.cartItems.idArray.map((meal) => {
            if (global[meal].total != 0) 
            return (
            <Fragment key={global[meal].id}>
              <p className={styles.modalTitle}>{global[meal].name}</p>
              <div className={styles.series}>
                <p>
                  <span className={styles.price}>${global[meal].price}</span>
                  <span className={styles.total}>&times; {global[meal].total}</span>
                </p>
                <div className={styles.edit}>
                  <button id={meal} onClick={lessOneHandler} className={styles.minus}>-</button>
                  <button id={meal} onClick={addOneHandler} className={styles.plus}>+</button>
                </div>
              </div>
              <hr />
            </Fragment>)
          })

        }

        {/* Total Amount of all the items */}
        <p className={styles.amountPara}>
          <span>Total Amount</span>
          <span>${totalBill.toFixed(2)}</span>
        </p>

        <div className={styles.btnDiv}>
          <button onClick={() => props.setModal(false)} className={styles.closeBtn}>Close</button>
          <button onClick={placeOrder} className={styles.orderBtn}>Order</button>
        </div>
      </div>
      
    </div>
  )
}

export default Modal