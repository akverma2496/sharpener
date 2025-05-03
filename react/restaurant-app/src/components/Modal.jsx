import React from 'react'
import styles from "./Modal.module.css"

const Modal = (props) => {
  return (
    <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
            <p className={styles.modalTitle}>{props.meal.name}</p>
            <p className={styles.amountPara}>
                <span>Total Amount</span>
                <span>{props.meal.price}</span>
            </p>
            <div className={styles.btnDiv}>
                <button className={styles.closeBtn}>Close</button>
                <button className={styles.orderBtn}>Order</button>
            </div>
        </div>
    </div>
  )
}

export default Modal