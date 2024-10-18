/*
state
{
    cartItems: [],
    total: 0,
    quantity: 0
}
*/

export default function cartReducer(state, action) {
    switch (action.type) {
        // product has {id, title, price, image, description}
        // dispatch({type:'ADD_TO_CART', payload: product})
        case 'ADD_TO_CART':
            let { id, title, price, image } = action.payload;
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
            return state;
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