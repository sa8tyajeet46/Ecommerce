import {PLACE_ORDER,PLACE_ORDER_FAIL} from "../constants/orderConstants"
import axios from "../axios";
export const setOrder=(adress,country,state,district,pincode,name,id,product,amountToBePaid)=>async (dispatch)=>{
   try{
    const config={'Content-Type':'application/json'};
    const {data}=await axios.post('order/new',{adress,country,state,district,pincode,name,id,product,amountToBePaid},config);
    dispatch({
        type:PLACE_ORDER,
        payload:data
    })
   }catch(error){
    dispatch({
        type:PLACE_ORDER_FAIL,
        payload:error.message
    })
   }
}