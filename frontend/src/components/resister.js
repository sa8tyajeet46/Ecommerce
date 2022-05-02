import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { resisterUser } from "../action/userAction";
export default function Resisiter(){
    const dispatch=useDispatch();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const formSubmitted=(e)=>{
    e.preventDefault();
    dispatch(resisterUser(name,email,password));
    }
    const {loading,isauthenticated,users}=useSelector(state=>state.userReducer);
    if(isauthenticated)
    navigate('/product');
    return ( <div className="w-full flex justify-center py-10">
        <div className="w-full sm:max-w-md">
            <form onSubmit={formSubmitted} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           <div className="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
        Name
      </label>
                <input type="text" required onChange={(e)=>setName(e.target.value)}
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={name}
                placeholder="Enter name"></input>
                <p class="text-red-500 text-xs italic">Minimum length should be 4</p>
                </div>
                <div className="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="Email">
        Email
      </label>
            <input type="email" 
            id="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required       
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"></input>
            </div>
            <div className="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
                   <input type="password"
                   placeholder="Enter password"
                   id="password"
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password}>
            </input>
            <p class="text-red-500 text-xs italic">Minimum length should be 4</p>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">resister</button>
        </form>
        </div>
    </div>)
}