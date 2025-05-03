import React from 'react'
import styles from "./AllMeals.module.css"
import DishDetail from './DishDetail'
import AddItems from './AddItems'
import Modal from './Modal'
import { createPortal } from 'react-dom'

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
                    <>
                    <li className={styles.list}>
                        <DishDetail meal={meal}/>
                        <AddItems />  
                    </li>
                    <hr />
                    </>
                ))
            }
        </ul>
        {true && createPortal(<Modal meal={dummyMeals[0]}/>, document.getElementById("modal"))}
    </div>
  )
}

export default AllMeals