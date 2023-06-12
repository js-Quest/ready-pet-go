import React, { useState } from 'react';
import { useStateContext } from '../utils/cartContext';

const ProductDeats = ({ product, products}) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decreaseQty, increaseQty, onAdd, setShowChart } = useStateContext();
}