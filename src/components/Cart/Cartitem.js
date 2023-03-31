import classes from './Cartitem.module.css';
import Card from '../Prod/Card';
const CartItem = (props) => {
  const price = `RS .${props.price.toFixed(2)}`;
  console.log("cart item called")

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
        <img src={props.imageUrl}></img>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}> X{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;