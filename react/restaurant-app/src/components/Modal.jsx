import React from 'react'
import styles from "./Modal.module.css"
import { Fragment } from 'react'

const Modal = (props) => {
  
  const closeModalHandler = () => {
    props.onSetCartVisility(false);
  }

  const addOneHandler = (e) => {
    let total = props.cartItems[e.target.id].total;
    console.log(total)
    props.cartItems[e.target.id].total = total + 1;
    props.setTotalValue((prevState) => {
      return prevState + 1;
    })
  }

  const lessOneHandler = (e) => {
    let total = props.cartItems[e.target.id].total;
    props.cartItems[e.target.id].total = total - 1;
    props.setTotalValue((prevState) => {
      return prevState - 1;
    })
  }

  const placeOrder = () => {
    props.setTotalValue(0)
    Object.values(props.cartItems).forEach((value) => {
      value.total = 0;
    })
    props.onSetCartVisility(false);
  }

  let totalBill = 0;

  Object.values(props.cartItems).forEach((val) => {
    totalBill += (val.total * val.price)
  })

  return (
    <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>

          {/* logic of map */}
          {
            props.dummyMeals.map((meal) => {
              if(props.cartItems[meal.name].total != 0) return (<Fragment key={meal.id}>
                  <p className={styles.modalTitle}>{meal.name}</p>
                  <div className={styles.series}>
                    <p>
                      <span className={styles.price}>${meal.price}</span>
                      <span className={styles.total}>&times; {props.cartItems[meal.name].total}</span>
                    </p>
                    <div className={styles.edit}>
                      <button id={meal.name} onClick={lessOneHandler} className={styles.minus}>-</button>
                      <button id={meal.name} onClick={addOneHandler} className={styles.plus}>+</button>
                    </div>
                  </div>
                  <hr />
              </Fragment>)
            })
  
          }

            <p className={styles.amountPara}>
                <span>Total Amount</span>
                <span>${totalBill.toFixed(2)}</span>
            </p>
            <div className={styles.btnDiv}>
                <button onClick={closeModalHandler} className={styles.closeBtn}>Close</button>
                <button onClick={placeOrder}className={styles.orderBtn}>Order</button>
            </div>
        </div>
    </div>
  )
}

export default Modal