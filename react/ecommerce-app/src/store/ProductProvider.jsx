import { createContext, useState } from "react"

export const ProductContext = createContext()

const ProductProvider = (props) => {

    const [modal,  setModal] = useState(false)

    const products = [
        {
            id: Math.random().toString(),
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },

        {
            id: Math.random().toString(),
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },

        {
            id: Math.random().toString(),
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: Math.random().toString(),
            title: 'Blue Color',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]

    const [cartItems, setCartItems] = useState([])

return (
    <ProductContext.Provider value={{products, modal, setModal, cartItems, setCartItems}}>
        {props.children}
    </ProductContext.Provider>
)
}

export default ProductProvider