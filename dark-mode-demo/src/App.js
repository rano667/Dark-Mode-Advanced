// src/App.js
import React from 'react';
import './styles.css';
import { ThemeProvider } from './context/ThemeContext';
import ToggleButton from './components/ToggleButton';
import CustomComponent from './components/CustomComponent';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>React Dark Mode Demo</h1>
        <ToggleButton />
        <CustomComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
