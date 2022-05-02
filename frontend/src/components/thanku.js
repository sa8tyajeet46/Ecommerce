import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router";
export default function Thanku(){
   
    const user=useSelector(state=>state.userReducer.user?state.userReducer.user.user:null);
    const navigate=useNavigate('/product');
    return(
        <div className="w-full px-10 py-10">
            <div className="w-full px-5 bg-white shadow-md rounded py-10 items-center flex flex-col">
            <div className="text-2xl">Thank u for shopping {user.name}</div><div>Your order will arive soon</div></div>
           continue <button onClick={()=>navigate('/Product')} className="text-blue-700">shopping</button>
        </div>
    )
}