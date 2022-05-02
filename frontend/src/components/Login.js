import { useState,useEffect } from "react";
import {setUser,loadUser} from '../action/userAction'
import {useNavigate} from 'react-router'
import { useDispatch,useSelector } from "react-redux";
export default function Login(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {loading,isauthenticated,users}=useSelector(state=>state.userReducer);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const formSubmitted=(e)=>{
        e.preventDefault();
        dispatch(setUser(email,password));
    }
   if(isauthenticated)
    navigate('/product');
        return (
        <div className="w-full flex justify-center py-10">
            <div className="w-full sm:max-w-md">
        <form onSubmit={formSubmitted} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
            <input id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter your email"
            type="email" 
            required       
            onChange={(e)=>setEmail(e.target.value)}
            value={email}></input>
            </div>
            <div className="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
                   <input type="password"
                   placeholder="Enter password"
                   className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                   id="password"
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password}>
            </input>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
       <div>
        <span className="mr-5">Dont have a account ?</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>navigate('/resister')}>Resisiter</button>
      </div>
    </form>  
    </div>
    </div>);
}