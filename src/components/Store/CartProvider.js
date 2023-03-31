import CartContext from './cart-context';
import { useReducer, useEffect } from 'react';
import axios from 'axios';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  isDataLoaded: false,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartIndexItem = state.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = state.items[existingCartIndexItem];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };
      updatedItems = [...state.items];
      updatedItems[existingCartIndexItem] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      isDataLoaded: true,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartIndexItem = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingCartIndexItem];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartIndexItem] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      isDataLoaded: true,
    };
  }

  if (action.type === 'REPLACE') {
    return {
      items: action.items,
      totalAmount: action.totalAmount,
      isDataLoaded: true,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  useEffect(() => {
    const postData = async () => {
      try {
        await axios.post('https://crudcrud.com/api/be7b5eb3d5a04312866931a238cb79e0/cartdetails1', { cartItems: cartState.items, totalAmount: cartState.totalAmount });
      } catch (error) {
        console.log(error);
      }
    };

    if (cartState.isDataLoaded) {
      postData();
    }
  }, [cartState.items, cartState.totalAmount]);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;