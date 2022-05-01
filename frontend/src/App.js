import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { getProducts } from './action/getallproduct';
import Footer from './components/footer';
import Header from './components/header';
import { Card } from './components/card';
 function App() {
  const dispatch=useDispatch();
  const [keyword,setKeyword]=useState('');
useEffect(()=>{
  dispatch(getProducts(keyword));
},[dispatch,keyword]);
const {loading,products,error}=useSelector(state=>state.productReducer)
  return (<div className="h-screen">{!loading?products?
    <div className="h-full">
    <Header></Header>
    <form> <input className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Search the product' type="text" onChange={(e)=>{
          setKeyword(e.target.value);
        }}></input></form>
    <div className="grid grid-cols-1 gap-20 mx-10 my-10 md:grid-cols-3 ">
    {products.map((product)=>(<Card name={product.name} price={product.price} review={product.numofrating} rating={product.rating} id={product._id} image={product.images[0].url}></Card>))}
    </div>
    <Footer></Footer>
    </div>:<div>{error}</div>:<div>Loading</div>}
  </div>);
}

export default App;
