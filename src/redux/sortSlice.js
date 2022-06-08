import { createSlice } from "@reduxjs/toolkit";

const initialState = {sortState: false};

const sortSlice = createSlice({
    name:'sort',
    initialState,
    reducers:{
        setSort:(state)=>{
            state.sortState = !state.sortState;
        },
    },
});

//export state to global
export const selectSort = (state) => state.sort.sortState;

//export actions to global
export const {setSort} = sortSlice.actions;

//export reducer to global
export default sortSlice.reducer;