import { configureStore } from "@reduxjs/toolkit";
import sortReducer from './sortSlice';

const store = configureStore({
    reducer:{
        sort:sortReducer
    },
    devTools:process.env.NODE_ENV !== 'production',
})

export default store;