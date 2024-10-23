import React, { createContext, Reducer, useReducer } from 'react'
import cartReducer, { ActionType, CartReducerState } from '../reducers/cartReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CartItem from '../model/CartItem';
import { Product } from '../model/Product';

type CartContextType = {
    cart: CartItem[],
    total: number,
    quantity: number,
    addToCart: (product: Product) => void,
    increment: (id: number) => void,
    clearCart: () => void
}

// create context and initialize
export const CartContext = createContext<CartContextType>({
    cart: [],
    total: 0,
    quantity: 0,
    addToCart: (p: Product) => { },
    increment: (id: number) => { },
    clearCart: () => { }
});

const initialState:CartReducerState = {
    cartItems: [],
    total: 0,
    quantity: 0
}

type AppProps = {
    children: React.ReactNode
}
// Reactnode can be string, number, null, react element, array of react element

export default function CartProvider(props: AppProps) {
    // let [state, dispatch] = useReducer<Reducer<CartReducerState, ActionType>>(cartReducer, initialState);
    let [state, dispatch] = useReducer(cartReducer, initialState);
   
    let navigate = useNavigate();

    function addToCart(product: Product) {
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    function increment(id:number) {
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
