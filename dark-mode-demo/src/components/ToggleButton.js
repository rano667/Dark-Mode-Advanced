// src/components/ToggleButton.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ToggleButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleButton;
