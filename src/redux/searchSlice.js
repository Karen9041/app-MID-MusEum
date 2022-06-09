import { createSlice } from "@reduxjs/toolkit";

const initialState = {searchState: false};

const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setSearch:(state)=>{
            state.searchState = !state.searchState;
        },
    },
});

//export state to global
export const selectSearch = (state) => state.search.searchState;

//export actions to global
export const {setSearch} = searchSlice.actions;

//export reducer to global
export default searchSlice.reducer;