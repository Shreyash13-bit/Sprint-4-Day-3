import React, { useState } from "react";

const ProductEdit = () => {
  const [product, setProduct] = useState({ name: "", price: "" });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product Updated: ${product.name} - $${product.price}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input name="name" placeholder="Product Name" onChange={handleChange} />
      <input name="price" placeholder="Price" onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
};

export default ProductEdit;
