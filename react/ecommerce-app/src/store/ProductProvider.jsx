import { createContext, useState } from "react"

export const ProductContext = createContext()

const ProductProvider = (props) => {

    const [modal, setModal] = useState(false)
    const [cartItems, setCartItems] = useState([])

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