import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./Slices/CategorSlice.jsx"
import categoryPageSlice from "./Slices/CategoryPageSlice.jsx"
import searchSlice from "./Slices/SearchSlice.jsx"

const store=configureStore({
    reducer:{
        category:categorySlice,
        categoryPage:categoryPageSlice,
        search:searchSlice
    }
})

export default store;

