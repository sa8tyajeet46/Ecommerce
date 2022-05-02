import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {removeFromCart} from "../action/cartAction";
export default function Cart(){
    const dispatch=useDispatch();
    const {cartItems}=useSelector(state=>state.cartReducer);
    const navigate=useNavigate();
    return (<div className="grid sm:grid-cols-4 grid-cols-3" >
        <div className="col-span-3 px-5 py-4">{cartItems.map((e)=>(<div className="w-full my-4 flex px-2 rounded-md hover:shadow-xl justify-between bg-[#f9f9f9] items-center">
            <img src={e.url} className="w-20 sm:w-32"></img>
            <span className="text-2xl font-semibold">{e.name}</span>
            <span>{e.quantity}</span>
            <button className="bg-red-600 px-1 sm:px-4 py-2 text-white rounded-md" onClick={()=>dispatch(removeFromCart(e.product))}>Remove</button>
        </div>
        ))}
        {cartItems.length===0?<span>continue <button className="text-blue-400" onClick={()=>navigate('/product')}>shopping</button></span>:<></>}
        </div>
        
        <div className="w-40 sm:w-full flex flex-col justify-center items-center">
            <span className="mb-2 text-xl font-medium">Quantity:{cartItems.reduce((a,b)=>a+b.quantity,0)}</span>
            <span className="mb-2 text-xl font-medium">Price:RS {cartItems.reduce((a,b)=>a+b.quantity*b.price,0)}</span>
            {cartItems.length===0?<></>:(<button className="bg-blue-700 px-4 text-white py-3 text-xl rounded-md mb-2" onClick={()=>navigate('/shipping')}>Proceed to order</button>)}
        </div>
        </div>)
}