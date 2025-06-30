import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Content() {
  const { theme } = useContext(ThemeContext);

  const contentStyle = {
    padding: '2rem',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#eee',
    minHeight: '200px'
  };

  return (
    <div style={contentStyle}>
      <p>This is the content area.</p>
      <p>The current theme is: {theme}</p>
    </div>
  );
}

export default Content;
