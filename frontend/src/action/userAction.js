import {LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCESS,RESISTER_FAIL,RESISTER_REQUEST,RESISTER_SUCESS,LOAD_FAIL,LOAD_REQUEST,LOAD_SUCESS, LOGOUT_FAIL, LOGOUT_SUCESS} from '../constants/userConstant';
import axios from '../axios';
export const setUser=(email,password)=>async (dispatch)=>{
    try{
        dispatch({
            type:LOGIN_REQUEST
        })
        const config={'Content-Type':'application/json'};
        const {data}=await axios.post('login',{email,password},config);
       dispatch({
           type:LOGIN_SUCESS,
           payload:data
       })

    }catch(error){
       dispatch({
           type:LOGIN_FAIL,
           payload:error.message
       })
    }
}
export const resisterUser=(name,email,password)=>async (dispatch)=>{
    try{
        dispatch({
            type:RESISTER_REQUEST
        })
        const config={'Content-Type':'application/json'};
        const {data}=await axios.post('register',{name,email,password},config);
       dispatch({
           type:RESISTER_SUCESS,
           payload:data
       })

    }catch(error){
       dispatch({
           type:RESISTER_FAIL,
           payload:error.message
       })
    }
}
export const loadUser=()=>async (dispatch)=>{
    try{
        dispatch({
            type:LOAD_REQUEST
        })
        //const config={'Content-Type':'application/json'};
        const {sucess,data}=await axios.get('me');
       // console.log(data);
       if(sucess)
       {
       dispatch({
           type:LOAD_SUCESS,
           payload:data
       })
    }
    else
    dispatch({
        type:LOAD_FAIL,
        payload:"error"
    })
    }catch(error){
       dispatch({
           type:LOAD_FAIL,
           payload:error.message
       })
    }
}
export const logoutUser=()=>async (dispatch)=>{
    try{
       await axios.get('logout');
   dispatch({type:LOGOUT_SUCESS})
    }catch(error){
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.message
        })
    }
}