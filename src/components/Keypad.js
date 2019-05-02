import React from 'react';
import Key from './Key';

const styles = {
  root: {
    background: '#000',
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
};

export const Keypad = () => {
  return(
    <div style={styles.root}>
    <div style={styles.row}>
      <Key keyValue='7' />
      <Key keyValue='8' />
      <Key keyValue='9' />
    </div>
      <div style={styles.row}>
        <Key keyValue='4' />
        <Key keyValue='5' />
        <Key keyValue='6' />
      </div>
      <div style={styles.row}>
        <Key keyValue='1' />
        <Key keyValue='2' />
        <Key keyValue='3' />
      </div>
    </div>
  )
};

export default Keypad;