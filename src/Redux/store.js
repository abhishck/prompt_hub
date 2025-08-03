import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./Slices/CategorSlice.jsx"

const store=configureStore({
    reducer:{
        category:categorySlice
    }
})

export default store;

