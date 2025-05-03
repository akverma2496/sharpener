import React from 'react'
import styles from "./DishDetail.module.css"

const DishDetail = (props) => {
    return (
        <div>
            <p className={styles.pone}>{props.meal.name}</p>
            <p className={styles.ptwo}>{props.meal.sub}</p>
            <p className={styles.pthree}>${props.meal.price}</p>
        </div>
    )
}

export default DishDetail