import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setOrder} from "../action/orderAction"
import {Country,State,City} from 'country-state-city'
export default function Shipping(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const user=useSelector(state=>state.userReducer.user?state.userReducer.user.user:null);
    useEffect(()=>{
        if(!user)
        {
       navigate('/');
        }
    },[user])
    const [adress,setAdress]=useState("")
    const [country,setCountry]=useState("")
    const [state,setState]=useState("")
    const [District,setDistrict]=useState("")
    const [pincode,setPincode]=useState()
    const product=useSelector(state=>state.cartReducer.cartItems);
    const amountToBePaid=product.reduce((a,b)=>a+b.price*b.quantity,0);
    const formSubmitted=(e)=>{
        e.preventDefault();
       dispatch(setOrder(adress,country,state,District,pincode,user.name,user._id,product,amountToBePaid));
       navigate('/thanku');
    }
    return (
        
        <div className="w-full flex justify-center py-10">
        <div className="w-full sm:max-w-md">
            <form onSubmit={formSubmitted} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="adress">
        Enter Adress
      </label>
        <input type="text" 
       className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={adress} id="adress" required placeholder="adress" onChange={(e)=>setAdress(e.target.value) }></input>
        </div>
        <div className="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
        Enter Country
      </label>
        <select value={country} id="country" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required placeholder="country" onChange={(e)=>setCountry(e.target.value)}>
            <option value="">Country</option>
        {
          Country &&  Country.getAllCountries().map((item)=>(<option value={item.isoCode}>{item.name}</option>))
        }
        </select>
        </div>
        <div className="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="state">
        Enter State
      </label>
        <select value={state} id="state" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required placeholder="state" onChange={(e)=>setState(e.target.value)}>
        <option value="">state</option>
            {State && State.getStatesOfCountry(country).map((item)=>(<option value={item.isoCode}>{item.name}</option>))}
        </select>
        </div>
        <div className="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
        Enter City
      </label>
        <input type="text" id="city" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={District} required placeholder="City" onChange={(e)=>setDistrict(e.target.value)}></input>
        </div>
        <div className="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="Pin">
        Enter PINCODE
      </label>
        <input type="number" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="pin" value={pincode} required placeholder="Pincode" onChange={(e)=>setPincode(e.target.value)}></input>
        <div className="mt-4"><button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" required onClick={formSubmitted}>placeOrder</button>
      </div>
      </div>
      </form>
   </div>
</div>)
}