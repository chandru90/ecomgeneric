import Header from './Header';
import React,{useState} from 'react';
import Products from '../Prod/Products';
import Cart1 from './Cart1';
import CartProvider from '../Store/CartProvider';
function Cart() {
  const[cartisshown,setcartisshown]=useState(false)
  const cartshowhandler=()=>{
    setcartisshown(true)
  }
  const cartnotshowhandler=()=>{
    setcartisshown(false)
  }
  return <CartProvider>
    {cartisshown &&<Cart1 onclose={cartnotshowhandler} />}
      <Header setcart={cartshowhandler} />
      <main>
        <Products />
      </main>
 </CartProvider>
    
 
}

export default Cart;
