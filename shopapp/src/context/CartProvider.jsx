import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';


export const CartContext = createContext();

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product) {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id })
    }

    function clearCart() {
        dispatch({ type: 'CLEAR_CART' });
    }

    return (
        <CartContext.Provider value={{
            cart: state.cartItems,
            total: state.total,
            quantity: state.quantity,
            addToCart,
            increment,
            clearCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
