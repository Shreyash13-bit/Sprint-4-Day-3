import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const headerStyle = {
    padding: '1rem',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#000' : '#fff'
  };

  return (
    <header style={headerStyle}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
