import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productReducer } from './reducer/productReducer';
const middleWare=[thunk];
const initialState={};
const reducer=combineReducers({productReducer});
export const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)));