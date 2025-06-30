import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 40000 },
  { id: 2, name: 'Mouse', price: 500 }
];

function ProductList() {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name} - ₹{p.price}</span>
          <button onClick={() => addProduct(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
