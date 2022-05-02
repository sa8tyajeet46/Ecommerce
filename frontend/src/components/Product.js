import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useNavigate, useParams } from "react-router";
import Header from "./header";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {addToCart} from "../action/cartAction"
import { loadUser } from "../action/userAction";
import { getProducts } from "../action/getallproduct";
import { useEffect } from "react";
export default function Product(){
  const dispatch=useDispatch();
    const navigate=useNavigate();
    const {id}=useParams();
    const {isauthenticated,user}=useSelector(state=>state.userReducer);
    const [qty,setQty]=useState(1);
    const {loading,products,error}=useSelector(state=>state.productReducer)
    const product=loading?null:products.find((e)=>e._id===id);
    const incQty=()=>{
      if(qty>=product.stock)
      return;
      setQty(qty+1);
    }
    const decQty=()=>{
      if(qty===1)
      return;
      setQty(qty-1);
    }
    const addCart=(id,quantity)=>{
     dispatch(addToCart(id,quantity));
    }
  
    return(<>{loading?<div>loading</div>:<>
    <Header></Header>
    <div className="grid lg:grid-cols-2 grid-cols-1">
       <div className="w-full flex justify-center py-10"> <img src={product.images[0].url} className="w-3/4"></img></div>
       <div className="w-full flex justify-center py-10 space-y-8">
           <ul>
               <li className="text-4xl">{product.name}</li>
               <li className="text-2xl">Description:{product.description}</li>
               <li className="text-xl">   <ReactStars
    count={5}
  value={product.rating}
  a11y={true}
    size={24}
    activeColor="#ffd700"
  /></li>
               <li className="text-xl text-red-800">RS  {product.price}</li>
               <li className="text-xl">{product.stock>0?<span className="text-green-800">Available</span>:<span className="text-red-800">Unavailable</span>}</li>
               <li>({product.numofrating} reviews)</li>
               <li className="mb-4">
                 <button onClick={decQty} className="bg-blue-700 text-white w-5 rounded-sm">-</button>
                 <input type="number" value={qty} className="w-10 outline-none"></input>
                 <button onClick={incQty} className="bg-blue-700 text-white w-5 rounded-sm">+</button>
               </li>
              {user?<>{ product.stock>0?<button onClick={()=>addCart(id,qty)} className="bg-blue-700 px-4 text-white py-3 text-2xl rounded-full">Add to Cart</button >:
              <li className="text-red-800 text-xl">The product is out of stock</li>}</>:<div className="text-xl"><button className="text-blue-800 hover:underline" onClick={()=>navigate('/')}> Login</button> to Add to Cart</div>}
               
           </ul>
       </div>
        </div></>}</>)
}