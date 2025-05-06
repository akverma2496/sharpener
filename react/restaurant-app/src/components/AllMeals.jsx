import { Fragment } from 'react'
import styles from "./AllMeals.module.css"
import DishDetail from './DishDetail'
import AddItems from './AddItems'
import { useContext } from 'react'
import { CartContext } from '../store/context'

const AllMeals = (props) => {

    const cartItems = useContext(CartContext)

    return (
        <div className={styles.container}>
            <ul>
                {
                    cartItems.idArray.map((name) => (
                        <Fragment key={cartItems.byId[name].id}>
                            <li className={styles.list}>
                                <DishDetail meal={cartItems.byId[name]} />
                                <AddItems meal={cartItems.byId[name]} cartItems={cartItems} setTotalValue={props.setTotalValue} />
                            </li>
                            <hr />
                        </Fragment>
                    ))
                }
            </ul>
        </div>
    )
}

export default AllMeals