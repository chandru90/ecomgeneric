import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import classes from './Cart1.module.css';
import Modal from './Modal';
import CartContext from '../Store/cart-context';
import CartItem from './Cartitem';

const Cart1 = (props) => {
  const [cartData, setCartData] = useState({items:[],totalAmount:0});
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs${cartData?.totalAmount || 0}`;
  const hasItems = cartData?.items?.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://crudcrud.com/api/d56e3a3094f0461db964521107381326/cartdetails');
        
        setCartData({items:response.data.cartItems,totalAmount:response.data.totalAmount});
        console.log(response.data.totalAmount)
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const cartDetails = cartData ? (
    <ul className={classes['cart-items']}>
      {cartData.items?.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          imageUrl={item.imageUrl}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  ) : (
    <p>No items in cart.</p>
  );

  return (
    <Modal onclick={props.onClose}>
      {cartDetails}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart1;