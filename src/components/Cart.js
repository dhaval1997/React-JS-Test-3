import React from "react";
const Cart = ({ cartItems }) => {
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart:</h2>
      <ul className="cart">
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>
              Size:{" "}
              {item.medium > 0
                ? "Medium"
                : item.large > 0
                ? "Large"
                : "Xtra-Large"}
            </span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: Rs.{item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: Rs.{totalAmount}</p>
      </div>
    </div>
  );
};

export default Cart;
