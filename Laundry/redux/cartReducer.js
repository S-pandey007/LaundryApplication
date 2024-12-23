import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },

    reducers: {
        addToCart: (state, action) => {
            if (!Array.isArray(state.cart)) state.cart = [];
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                itemPresent.quantity++;
            } else if (action.payload && action.payload.id) {
                state.cart.push({ ...action.payload, quantity: 1 });
            } else {
                console.error('Invalid item payload for addToCart:', action.payload);
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                itemPresent.quantity++;
            } else {
                console.error('Item not found for increasing quantity:', action.payload.id);
            }
        },

        decreaseQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent) {
                if (itemPresent.quantity === 1) {
                    state.cart = state.cart.filter((item) => item.id !== action.payload.id);
                } else {
                    itemPresent.quantity--;
                }
            } else {
                console.error('Item not found for decreasing quantity:', action.payload.id);
            }
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
