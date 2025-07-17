import { createContext, useContext, useEffect, useState } from "react"
import { AuthContext } from "./AuthProvider"

export const ProductContext = createContext()

const ProductProvider = (props) => {

    const { userId } = useContext(AuthContext)
    const [modal, setModal] = useState(false)
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const getThedata = async () => {
            const response = await fetch(`https://e-commerce-2496-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems/${userId}.json`)
            const data = await response.json()
            setCartItems(data || [])
        }
        getThedata();
    },[])

    const products = [
        {
            id: "p1",
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },

        {
            id: "p2",
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },

        {
            id: "p3",
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: "p4",
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]

    return (
        <ProductContext.Provider value={{ products, modal, setModal, cartItems, setCartItems }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider