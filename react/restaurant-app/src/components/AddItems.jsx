import React, { useState } from 'react'
import styles from "./AddItems.module.css"

const AddItems = (props) => {

  const [count, setCount] = useState(0);

  const addToCartHandler = () => {
    props.meal.total = parseInt(count);
    let totalCount = 0;
    Object.values(props.cartItems.byId).forEach(value => totalCount += value.total);
    props.setTotalValue(totalCount)
  }

  return (
    <div>
        <p>
          <span className={styles.amount}>Amount</span>
          <input className={styles.quant} type="number" min="0" 
          value={count} onChange={(e) => setCount(e.target.value)} />
        </p>
        <button onClick={addToCartHandler} className={styles.addBtn}>+ Add</button>
    </div>
  )
}

export default AddItems