import React from 'react';

import Display from './Display';

const styles = {
  root: {
    color: '#565656',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export const CalculatorLayout = () => {
  return(
    <div style={styles.root}>
      <h1>CALCULATOR</h1>
      <Display />
      {/* FunctionKeys Component */}
      {/* Keypad Component */}
    </div>
  )
};

export default CalculatorLayout;