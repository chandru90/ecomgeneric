import Products from "../Prod/Products"
import Header from "./Header"
import { useState } from "react"
import CartProvider from "../Store/CartProvider"
import Cart1 from "./Cart1"
import MainNavigation from "../Layout/MainNavigation"

const Cart =()=>{

    const[cartisshown,setcartisshown]=useState(false)
    console.log("cartmpduleexecuted" )
    console.log(cartisshown)
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
      
      <Products></Products>
      </main>
 </CartProvider>
    
 
}
export default Cart