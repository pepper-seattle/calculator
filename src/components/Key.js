import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    background: '#d3d3d3',
    border: '1px black solid',
    color: '#000',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
  },
};

export const key = ({keyValue}) => {
  return(
    <button style={styles.root}>{keyValue}</button>
  )
};

key.propType = {
  keyValue: PropTypes.string,
}

export default key;