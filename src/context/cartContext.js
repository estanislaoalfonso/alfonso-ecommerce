import { createContext, useState } from "react";

export const CartContext = createContext ();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([]);

    const addItem = (item) => {
        setCart ([...cart, item])
    }

    const removeItem = (item) => {
        //remover item del array y setear el cart.
    }

    return (
        <CartContext.Provider value = {{cart, addItem, removeItem}}> {children} </CartContext.Provider>
    )
}