import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from "redux-thunk"
import rootReducer from "./reducers"
import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";
//let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//기존의 createStore를 대체하기 위해 configureStore가 나옴
const store = configureStore({
    reducer : {
        auth : authenticateReducer,
        product : productReducer
    } //combineReducers에서 했던 것 처럼 코드 작성
})

export default store;