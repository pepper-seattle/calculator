import React from 'react';
import Key from './Key';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
};

export const FunctionKeys = () => {
  return(
    <div style={styles.root}>
      <Key keyValue='+' />
      <Key keyValue='-' />
      <Key keyValue='x' />
      <Key keyValue='%' />
    </div>
  )
};

export default FunctionKeys;