import React from 'react';

import Display from './Display';
import FunctionKeys from './FunctionKeys';
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
  pad: {
    display: 'flex',
  },
};

export const CalculatorLayout = () => {
  return(
    <div style={styles.root}>
      <h1>CALCULATOR</h1>
      <Display />
      <div style={styles.pad}>
        <Keypad />
        <FunctionKeys />
      </div>
    </div>
  )
};

export default CalculatorLayout;