import App from './App';
import {loadUser} from './action/userAction'
import {Provider} from 'react-redux';
import { store } from './store';
import Login from './components/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import Search from './components/search';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Resisiter from './components/resister';
import Product from './components/Product';
import Cart from './components/cart'
import { getProducts } from './action/getallproduct';
import Shipping from './components/Shipping';
import Thanku from './components/thanku';
export default function Bodie(){
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(loadUser())
      dispatch(getProducts(""))
  },[dispatch]);
  return(

  <BrowserRouter>
  <Routes>
    <Route exact path="/product" element={<App></App>}></Route>
    <Route exact path="/product/:id" element={<Product></Product>}></Route>
    {//<Route exact path="/search" element={<Search></Search>}></Route>
    }
    <Route exact path="/" element={<Login></Login>}></Route>
    <Route exact path="/resister" element={<Resisiter></Resisiter>}></Route>
    <Route exact path="/cart" element={<Cart></Cart>}></Route>
    <Route exact path="/shipping" element={<Shipping></Shipping>}></Route>
    <Route exact path="/thanku" element={<Thanku></Thanku>}></Route>
    </Routes></BrowserRouter>
);
}