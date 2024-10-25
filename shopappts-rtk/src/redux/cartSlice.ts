import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../model/Product";
import CartItem from "../model/CartItem";

type CartState = {
    cartItems: CartItem[],
    total: number,
    quantity: number,
}
const initialState: CartState = {
    cartItems: [],
    total: 0,
    quantity: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // state is a clone of store state sent by rtk
        addToCart: (state, action: PayloadAction<Product>) => {
            let item = { ...action.payload, qty: 1, amount: action.payload.price }
            state.cartItems.push(item);
            state.quantity++;
            state.total += item.amount;
        },
        increment: (state, action: PayloadAction<number>) => {
            let item = state.cartItems.find(p => p.id === action.payload);
            if (item) {
                item.qty++;
                state.total = state.cartItems.map(item => item.amount).reduce((v1, v2) => v1 + v2, 0.0)
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
            state.quantity = 0;
        }
    }
});

export const {
    addToCart,
    increment,
    clearCart
} = cartSlice.actions;

export const cartreducers = cartSlice.reducer;
