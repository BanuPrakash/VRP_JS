/*
state
{
    cartItems: [],
    total: 0, // used in Cart.jsx
    quantity: 0 // used in Navbar
}
*/

export default function cartReducer(state, action) {
    switch (action.type) {
        // product has {id, title, price, image, description}
        // dispatch({type:'ADD_TO_CART', payload: product})
        case 'ADD_TO_CART':
            let { id, title, price, image } = action.payload;
            if(state.cartItems.filter(p => p.id === action.payload.id).length != 0) {
                return state;
            }
            let lineItem = {
                id,
                title,
                price,
                image,
                qty: 1,
                amount: price // price * qty + GST - discount
            }
            let total = state.total + lineItem.amount;
            // return new state
            return {
                // clone state.cartItems and push lineItem
                cartItems: [...state.cartItems, lineItem],
                total,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            let products = state.cartItems;
            products.forEach(p => {
                if(p.id == action.payload) {
                    p.qty++;
                    p.amount = p.price * p.qty
                }
            });
            let totalAmt = products.map(p => p.amount).reduce( (a1, a2) => a1 + a2, 0.0);
            
            return {
                cartItems: products,
                total : totalAmt,
                quantity: state.quantity
            };
        case 'DECREMENT':
            return state;
        case 'CLEAR_CART':
            return {
                cartItems: [],
                total: 0,
                quantity: 0
            }
        default: return state;
    }
}