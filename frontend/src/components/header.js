import {MenuIcon} from '@heroicons/react/solid'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../action/userAction';
import { useNavigate } from 'react-router';
export default function Header(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
   const {loading,isauthenticated,user}=useSelector(state=>state.userReducer);
   const cart=useSelector(state=>state.cartReducer.cartItems);
   const logout=()=>{
       dispatch(logoutUser());
   }
    return (
        <div className="flex justify-between bg-sky-800 py-2 px-1 sm:px-10 pl-1 sm:pl-10">
            <div className="flex justify-center items-center text-white text-2xl" >ECOMMERCE</div>
            <div className="flex space-x-4 sm:space-x-10 text-white justify-center items-center ">
                    {isauthenticated?(<span className='cursor-pointer hover:underline  sm:flex'>{`${user.user.name.slice(0,5)}...`}</span>):(<a href='/' className="cursor-pointer hover:underline  sm:flex">Login</a>)}
            <button onClick={()=>navigate('/cart')} className="cursor-pointer hover:underline  sm:flex">Cart{cart.length===0?<></>:<span className="w-5 flex justify-center rounded-full bg-red-700 text-white">{cart.length}</span>}</button>  
            {isauthenticated && <button onClick={logout}>logout</button>} 
            </div>
        </div>
    )
}