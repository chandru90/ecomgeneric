import classes from './Cart1.module.css'
import { useContext } from 'react'
import Modal from './Modal'
import CartContext from '../Store/cart-context'
import CartItem from './Cartitem'
const Cart1 =(props)=>{
    const cartCtx =useContext(CartContext)
    const totalAmount =`Rs${cartCtx.totalAmount.toFixed(2)}`
    const hasItems= cartCtx.items?.length > 0
    const cartItemRemoveHandler =(id)=>{
        cartCtx.removeItem(id)

    }
    const cartItemAddHandler =(item)=>{
     cartCtx.addItem({...item,amount:1})
      
        
    }
    const cartdetails=(<ul className={classes['cart-items']}>{ cartCtx.items.map((item) =>( <CartItem key ={item.id} name={item.name} amount={item.amount} price ={item.price} imageUrl={item.imageUrl} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>))}</ul>)
   console.log("cartt ddeetails")
   return ( <Modal onclick={props.onclose}>
        {cartdetails}
<div className={classes.total}>
    <span>total amount</span>
    <span>{totalAmount}</span>

</div>
<div className={classes.actions}>
<button className={classes['button--alt']} onClick={props.onclose}>close</button>
{hasItems && <button className={classes.button}>order</button>}
    </div>
</Modal>
    )
} 
export default Cart1