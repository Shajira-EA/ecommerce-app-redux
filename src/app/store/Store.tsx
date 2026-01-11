import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/slice";
import cartReducer from "../slice/cartslice"
import searchReducer from "../slice/searchSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
