import { configureStore } from "@reduxjs/toolkit";
import sortReducer from './sortSlice';
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer:{
        sort:sortReducer,
        search:searchReducer,
    },
    devTools:process.env.NODE_ENV !== 'production',
})

export default store;