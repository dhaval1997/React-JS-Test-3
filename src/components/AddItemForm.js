import React, { useRef } from "react";

const AddItemForm = ({ addProduct }) => {
  const nameRef = useRef("");
  const descRef = useRef("");
  const priceRef = useRef("");
  const largeRef = useRef("");
  const mediumRef = useRef("");
  const xlRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    let nameInput = nameRef.current.value;
    let priceInput = priceRef.current.value;
    let descInput = descRef.current.value;
    let largeInput = largeRef.current.value;
    let mediumInput = mediumRef.current.value;
    let xlInput = xlRef.current.value;

    let productDetails = {
      name: nameInput,
      price: priceInput,
      description: descInput,
      medium: mediumInput,
      large: largeInput,
      xl: xlInput,
    };
    addProduct(productDetails);
    nameRef.current.value = "";
    priceRef.current.value = "";
    descRef.current.value = "";
    largeRef.current.value = "";
    mediumRef.current.value = "";
    xlRef.current.value = "";
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" ref={nameRef} />
      <label htmlFor="description">Description:</label>
      <input id="description" type="text" ref={descRef} />
      <label htmlFor="price">Price:</label>
      <input id="price" type="number" ref={priceRef} />
      <label htmlFor="large">Large:</label>
      <input id="large" type="number" ref={largeRef} />
      <label htmlFor="medium">medium:</label>
      <input id="medium" type="number" ref={mediumRef} />
      <label htmlFor="xtra-large">xtra-large:</label>
      <input id="xtra-large" type="number" ref={xlRef} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddItemForm;
