import {ALL_PRODUCT_FAIL,ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCESS} from '../constants/productconstants';
import axios from 'axios';
export const getProducts=(keyword)=>async (dispatch)=>{
    try{
        dispatch({
            type:ALL_PRODUCT_REQUEST
        })
        const {data}=await axios.get(`/api/products?keyword=${keyword}`);
       dispatch({
           type:ALL_PRODUCT_SUCESS,
           payload:data
       })

    }catch(error){
       dispatch({
           type:ALL_PRODUCT_FAIL,
           payload:error.message
       })
    }
}