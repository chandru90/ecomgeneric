import CartIcon from './Carticon';
import classes from './Headercartbutton.module.css';
import { useContext } from 'react';
import CartContext from '../Store/cart-context';



const HeaderCartButton = (props) => {
   
   const cartCtx =useContext(CartContext)
    const numberOfCartItems = cartCtx.items?.reduce((currNumber,item)=>{
        return currNumber +item.amount
    },0)
  return (
    <button className={classes.button} onClick={props.onclick}>
     <span className={classes.icon}>
        <CartIcon />
    </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;