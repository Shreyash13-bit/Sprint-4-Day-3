import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/userSlice';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const handleLogin = () => {
    dispatch(login({ name: 'Shreyash', email: 'shreyash@gmail.com' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header style={{ padding: '1rem', background: '#ddd' }}>
      <h2>E-Shop</h2>
      {user.isLoggedIn ? (
        <div>
          <span>Welcome, {user.userInfo.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </header>
  );
}

export default Header;
