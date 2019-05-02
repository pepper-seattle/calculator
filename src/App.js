import React from 'react';
import './App.css';

import CalculatorLayout from './components/CalculatorLayout';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function App() {
  return (
    <div style={styles.root}>
      <CalculatorLayout />
    </div>
  );
}

export default App;
