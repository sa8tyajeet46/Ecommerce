import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants/cartConstants'
import axios from '../axios';
export const addToCart=(id,quantity)=>async (dispatch,getState)=>{
  
        const {data}=await axios.get(`api/product/${id}`);
        console.log(data.product[0].name);
        dispatch({
            type:ADD_TO_CART,
            payload:{
            quantity,
            product:data.product[0]._id,
            name:data.product[0].name,
            stock:data.product[0].stock,
            price:data.product[0].price,
            url:data.product[0].images[0].url,
            }
    });
    localStorage.setItem("cartItems",JSON.stringify(getState().cartReducer.cartItems));

}
export const removeFromCart=(id)=>async (dispatch,getState)=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem("cartItems",JSON.stringify(getState().cartReducer.cartItems));

}