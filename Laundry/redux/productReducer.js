import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },

    reducers: {
        getProducts: (state, action) => {
            // Add new product(s) to the state
            state.products.push(...action.payload); // Assuming action.payload is an array
        },

        increaseQty: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload.id);
            if (product) {
                product.quantity = (product.quantity || 0) + 1;
            } else {
                console.error("Product not found for increasing quantity:", action.payload.id);
            }
        },

        decreaseQty: (state, action) => {
            const product = state.products.find((item) => item.id === action.payload.id);
            if (product) {
                if (product.quantity && product.quantity > 1) {
                    product.quantity--;
                } else {
                    console.warn("Cannot decrease quantity below 1 for product:", action.payload.id);
                }
            } else {
                console.error("Product not found for decreasing quantity:", action.payload.id);
            }
        },
    },
});

export const { getProducts, increaseQty, decreaseQty } = productSlice.actions;
export default productSlice.reducer;
