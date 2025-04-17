import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
  const [error, setError] = useState();

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const NewProduct = { name, price, quantity };
    // console.log(NewProduct);

    // validation

    if (name.length === 0) {
      setError("please provide a product name");
      return;
    } else if (price === 0) {
      setError("price cannot be 0 or more than that");
      return;
    } else if (price < 0) {
      setError("please provide an posetive product number");
    } else {
      setError("");
    }

    handleAddProduct(NewProduct);
  };
  return (
    <div>
      <form onSubmit={handleProductSubmit}>
        <input
          type="text"
          name="name"
          placeholder="product name"
          className="input"
        />
        <input
          type="text"
          name="price"
          placeholder="product price"
          className="input"
        />
        <input
          type="text"
          name="quantity"
          placeholder="product quantity"
          className="input"
        />
        <input type="submit" value="submit" className="btn" />
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default ProductForm;
