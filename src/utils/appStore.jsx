// this is the store of redux
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice"
const appStore = configureStore({

    //this reducer is root reducer which will contain the other reducers
    reducer: {
        cart: cartReducer
    }
});

export default appStore;