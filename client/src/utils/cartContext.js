import React, { createContext, useContext, useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';

// creates hook
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState (false);
  // setting to empty bc will use local storage later
  const [cartItems, setCartItems] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQty, setTotalQty] = useState();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    // callback function to refer back to the previous Qty
    setQty((prevQty) => prevQty + 1)
  }
  const decreaseQty = () => {
    // callback function to refer back to the previous Qty
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      // checks to make sure Qty cannot go lower than 1
      return prevQty - 1;
    })
  }


  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQty,
        qty,
        increaseQty,
        decreaseQty
      }}>
      { children }
    </Context.Provider>
  )


}

// allows to use context like a hook
export const useStateContext = () => useContext(Context);