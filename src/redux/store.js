import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'






export default configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
    }, 
})
export const store=createStore(userReducer,composeWithDevTools(applyMiddleware(logger)))
