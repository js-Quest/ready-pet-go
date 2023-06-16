import React from "react";
import data from '../components/Cart/combobox'; 

function ItemDetails() {
  return (
    <div className="products">
      {data.item.map((item) => (
        <div className="product" key={item.slug}>
          <a href={`${item.slug}`}>
            <img src={item.image} alt={item.name} />
          </a>
          <div className="product-info">
            <a href={`/item/${item.slug}`}>
              <p>{item.name}</p>
            </a>
            <p>
              <strong>${item.price}</strong>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemDetails;
