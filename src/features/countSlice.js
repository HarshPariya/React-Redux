import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"count",
    initialState:0,
    reducers:{
        increment:(state,action)=>state+1,
        decrement:(state,action)=>state-1,
        reset:()=>0,
    }
})

// export for components
export const {increment,decrement,reset} = countSlice.actions;
// export for store
export default countSlice.reducer;