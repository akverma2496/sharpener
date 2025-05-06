import { createContext } from "react";

export const cartItems = {
    byId : {
        "Sushi":{
        id: 1,
        name: "Sushi",
        total: 0,
        price: 22.99
        },
        "Schnitzel": {
        id: 2,
        name: "Schnitzel",
        total: 0, 
        price: 16.50
        },
        "Barbeque Burger": {
        id: 3,
        name: "Barbeque Burger",
        total: 0, 
        price: 12.99
        },
        "Green Bowl": {
        id: 4,
        name: "Green Bowl",
        total: 0, 
        price: 10.50
        }
    },
    
    idArray : ["Sushi", "Schnitzel", "Barbeque Burger", "Green Bowl"],
}

export const CartContext = createContext(cartItems)