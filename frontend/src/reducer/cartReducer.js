import {ADD_TO_CART,REMOVE_FROM_CART} from '../constants/cartConstants'
export  const cartReducer=(state={cartItems:[]},action)=>{
     switch(action.type){
         case ADD_TO_CART:
             const item=action.payload;
           //  console.log(state.cartItems);
             const isItemExist=state.cartItems.find((i)=>
             {
                 return i.product===item.product;
             }
             );
             if(isItemExist){
             return {...state};
             }
             else{
              return {...state,
            cartItems:[...state.cartItems,item]}
            }
          case  REMOVE_FROM_CART:
            return {
              ...state,
              cartItems:state.cartItems.filter((e)=>e.product!==action.payload)
            }
         default:
             return state;
     }
}
