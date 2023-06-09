import React, { createContext, useContext, useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';

// creates hook
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState (false);
  // setting to empty bc will use local storage later
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantity, setTotalQuantity] = useState();
  const [qty, setQty] = useState(1);

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty
      }}>
      { children }
    </Context.Provider>
  )


}