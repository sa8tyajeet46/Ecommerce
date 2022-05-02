import {PLACE_ORDER,PLACE_ORDER_FAIL} from "../constants/orderConstants"
export const orderReducer=(state={order:{}},action)=>{
    switch(action.type){
        case PLACE_ORDER_FAIL:
            return {
                ...state,
                error:action.payload
            }
        case PLACE_ORDER:
            return {
                ...state,
                order:action.payload,
                error:null
            }
        default:
            return state;
        }
    }