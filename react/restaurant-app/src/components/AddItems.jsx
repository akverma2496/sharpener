import React from 'react'
import styles from "./AddItems.module.css"

const AddItems = () => {
  return (
    <div>
        <p>
            <span className={styles.amount}>Amount</span>
            <span className={styles.quant}>1</span>
        </p>
        <button className={styles.addBtn}>+ Add</button>
    </div>
  )
}

export default AddItems