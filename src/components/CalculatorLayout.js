import React from 'react';

import Display from './Display';
import Keypad from './Keypad';

const styles = {
  root: {
    color: '#565656',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
};

export const CalculatorLayout = () => {
  return(
    <div style={styles.root}>
      <h1>CALCULATOR</h1>
      <Display />
      {/* FunctionKeys Component */}
      <Keypad />
    </div>
  )
};

export default CalculatorLayout;