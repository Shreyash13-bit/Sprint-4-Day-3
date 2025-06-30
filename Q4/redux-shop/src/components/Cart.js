import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
      <h3>Cart</h3>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ₹{total}</p>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
