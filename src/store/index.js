import { configureStore } from "@reduxjs/toolkit";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cartslice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store;