import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer
  },
});


