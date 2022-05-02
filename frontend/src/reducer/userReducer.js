import {LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCESS,RESISTER_FAIL,RESISTER_REQUEST,RESISTER_SUCESS,LOAD_FAIL,LOAD_REQUEST,LOAD_SUCESS,
LOGOUT_SUCESS,LOGOUT_FAIL} from '../constants/userConstant'
export const userReducer=(state={user:{}},action)=>{
    switch(action.type){
        case LOGIN_FAIL:
        case RESISTER_FAIL:
        case LOAD_FAIL:
            return{
                ...state,
                isauthenticated:false,
                loading:false,
                user:null,
                error:action.payload
            };
        case LOGIN_REQUEST:
        case RESISTER_REQUEST:
        case LOAD_REQUEST:
             return{
                    loading:true,
                    user:null,
                };
        case LOGIN_SUCESS:
        case RESISTER_SUCESS:
        case LOAD_SUCESS:
            return{
                ...state,
                loading:false,
                user:action.payload,
                isauthenticated:true
            };
        case LOGOUT_SUCESS:
            return{
          loading:false,
          user:null,
          isauthenticated:false
        }
        case LOGOUT_FAIL:
            return{
                ...state,
                isauthenticated:false,
                loading:false,
                error:action.payload
            }
        default:
            return state;
                }
}