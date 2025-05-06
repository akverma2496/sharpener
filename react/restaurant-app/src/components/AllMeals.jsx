import React, {useState} from 'react'
import { Fragment } from 'react'
import styles from "./AllMeals.module.css"
import DishDetail from './DishDetail'
import AddItems from './AddItems'
import Modal from './Modal'
import { createPortal } from 'react-dom'

const AllMeals = (props) => {

    const dummyMeals = [
        {
            id: 1,
            name: "Sushi",
            sub: "Finest fish and veggies",
            price: 22.99
          },
          {
            id: 2,
            name: "Schnitzel",
            sub: "A german speciality!",  
            price: 16.50
          },
          {
            id: 3,
            name: "Barbeque Burger",
            sub: "American, raw, meaty",
            price: 12.99
          },
          {
            id: 4,
            name: "Green Bowl",
            sub: "Healthy...and green...", 
            price: 10.50
          }
    ]

  return (
    <div className={styles.container}>
        <ul>
            {
                dummyMeals.map((meal) => (
                    <Fragment key={meal.id}>
                    <li className={styles.list}>
                        <DishDetail meal={meal}/>
                        <AddItems meal={meal}
                        setTotalValue={props.setTotalValue}
                        cartItems={props.cartItems}
                        setCartItems={props.setCartItems} />  
                    </li>
                    <hr />
                    </Fragment>
                ))
            }
        </ul>
        {props.cartVisibility && createPortal(<Modal onSetCartVisility = {props.onSetCartVisibility} 
        cartItems={props.cartItems}
        dummyMeals={dummyMeals} 
        setTotalValue={props.setTotalValue} />, document.getElementById("modal"))}
    </div>
  )
}

export default AllMeals