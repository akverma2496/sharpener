import React from 'react'
import styles from "./AllMeals.module.css"

const AllMeals = () => {

    const dummyMeals = [
        {
            name: "Sushi",
            sub: "Finest fish and veggies",
            price: 22.99
        },
        {
            name: "Schnitzel",
            sub: "A german speciality!",
            price: 16.50
        },
        {
            name: "Barbeque Burger",
            sub: "American, raw, meaty",
            price: 12.99
        },
        {
            name: "Green Bowl",
            sub: "Healthy...and green...",
            price: "10.50"
        }
    ]

  return (
    <div className={styles.container}>
        <ul>
            {
                dummyMeals.map((meal) => (
                    <li className={styles.list}>
                        <div>
                            <p className={styles.pone}>{meal.name}</p>
                            <p className={styles.ptwo}>{meal.sub}</p>
                            <p className={styles.pthree}>${meal.price}</p>
                        </div>
                        <hr />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default AllMeals