import {ALL_PRODUCT_FAIL,ALL_PRODUCT_REQUEST,ALL_PRODUCT_SUCESS, CLEAR_ERROR} from '../constants/productconstants';
export  const productReducer=(state={products:[]},action)=>{
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return {
                loading:true,
                ...state
            };
        case ALL_PRODUCT_SUCESS:
                return {
                    loading:false,
                    products:action.payload.product
                }
        case ALL_PRODUCT_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        case CLEAR_ERROR:
            return {
               ...state,
               error:null
            }
        
        default:
            return state   
    }
}