import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import categoriesReducer from './categories/categories.slice';

import cartReducer from './cart/cart.slice';
import { useSelector } from "react-redux";
import userSlice from "./user/user.slice";
import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import cartSlice from "./cart/cart.slice";
import productSlice from "./products/product.slice";
import orderSlice from "./order/order.slice";

export const store = configureStore({
    reducer: {
        orderSlice,
        productSlice,
        cartSlice,
        productsSlice,
        categoriesSlice,
        userSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
