import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer } from './reducer/productReducer';
import { userReducer } from './reducer/userReducer';
import {cartReducer} from './reducer/cartReducer';
import {orderReducer} from './reducer/orderReducer';
const middleWare=[thunk];
const initialState={cartReducer:{cartItems:localStorage.getItem("cartItems")?
JSON.parse(localStorage.getItem("cartItems")):[]}};
const reducer=combineReducers({productReducer,userReducer,cartReducer,orderReducer});
export const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)));