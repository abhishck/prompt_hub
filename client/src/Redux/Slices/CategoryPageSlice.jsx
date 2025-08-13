import { createSlice } from "@reduxjs/toolkit";                                         

const categoryPageSlice = createSlice({
    name:"CategoryPage",
    initialState:{
        page:"All"
    },
    reducers:{
        insertPageCategory:(state,action)=>{
            state.page=action.payload;
        }
    }
})

export const {insertPageCategory} = categoryPageSlice.actions;
export default categoryPageSlice.reducer;