import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "product",
    initialState:{
        products: [],
    },

    reducers:{
        getProducts:(state,action)=>{
            state.products.push({...action.payload})
        },

        increaseQty:(state,action)=>{
            const itemPresent = state.cart.find((item)=>item.id===action.payload.id)
            itemPresent.quantity++
        },

        decreaseQty:(state,action)=>{
            const itemPresent = state.cart.find((item)=>item.id===action.payload.id)
            if(itemPresent.quantity==1){
                itemPresent.quantity=0
                const removeItem = state.cart.filter((item)=>item.id!==action.payload.id)
                state.cart = removeItem;
            }else{
                itemPresent.quantity--
            }
        }
    }
})

export const {getProducts,increaseQty,decreaseQty} = productSlice.actions
export default productSlice.reducer