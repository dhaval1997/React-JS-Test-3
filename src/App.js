import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Callback function to handle item addition to the cart
  const handleItemClick = (product, size) => {
    // Remove the item with the selected size from the products list
    const updatedProducts = products.filter(
      (p) => p !== product || p[size] === 0
    );
    setProducts(updatedProducts);

    // Add the item to the cart or update its quantity
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      const cartItem = updatedCart[product.name] || { ...product, quantity: 0 };
      cartItem[size] += 1;
      cartItem.quantity += 1;
      updatedCart[product.name] = cartItem;
      return updatedCart;
    });
  };

  return (
    <div>
      <AddItemForm addProduct={addProduct} />
      <ItemList products={products} onItemClick={handleItemClick} />
      <Cart cartItems={Object.values(cart)} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
