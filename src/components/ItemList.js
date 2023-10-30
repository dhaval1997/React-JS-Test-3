

import React from "react";
const ItemList = ({ products, onItemClick }) => {
  return (
    <div>
      <h2>Product List:</h2>
      <div>
        <ul className="products">
          {products.map((product, index) => (
            <li key={index}>
              <span>{product.name}</span>
              <span>{product.description}</span>
              <span>Price: Rs.{product.price}</span>
              <button onClick={() => onItemClick(product, "medium")}>
                Medium: {product.medium}
              </button>
              <button onClick={() => onItemClick(product, "large")}>
                Large: {product.large}
              </button>
              <button onClick={() => onItemClick(product, "xl")}>
                Xtra-Large: {product.xl}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;
