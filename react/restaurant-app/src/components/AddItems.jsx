import React, { useState } from 'react'
import styles from "./AddItems.module.css"

const AddItems = (props) => {

  const [count, setCount] = useState(0);

  const addToCartHandler = () => {
    props.cartItems[props.meal.name].total = count;
    let totalCount = 0;
    Object.values(props.cartItems).forEach(value => {
         totalCount += value.total
    });
    props.setTotalValue(totalCount)
  }

  return (
    <div>
        <p>
            <span className={styles.amount}>Amount</span>
            <input className={styles.quant} type="number" value={count} onChange={() => setCount(count+1)}/>
        </p>
        <button onClick={addToCartHandler} className={styles.addBtn}>+ Add</button>
    </div>
  )
}

export default AddItems