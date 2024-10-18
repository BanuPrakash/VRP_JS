import React, { createContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const CartContext = createContext();

const initialState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

export default function CartProvider(props) {
    let [state, dispatch] = useReducer(cartReducer, initialState);
    let navigate = useNavigate();
    
    function addToCart(product) {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    function increment(id) {
        dispatch({ type: 'INCREMENT', payload: id })
    }

    function clearCart() {
        let order = {
            "customer": window.sessionStorage.getItem("user"),
            "items": state.cartItems,
            "order-date": new Date()
        };

        axios.post("http://localhost:1234/orders", order).then(response => {
            dispatch({ type: 'CLEAR_CART' });
            navigate("/products");
        });
     
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
