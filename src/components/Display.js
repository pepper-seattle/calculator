import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    background: '#3c3c3c',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    width: 300,
    padding: 10,
  },
  values: {
    fontSize: 48,
    width: '100%',
    textAlign: 'right',
  },
};

export const Display = props => {
  const {displayValue} = props;
  return(
    <div style={styles.root}>
      <span style={styles.values}>{displayValue}</span>
    </div>
  )
};

Display.defaultProps = {
  displayValue: 0,
};

Display.propTypes = {
  displayValue: PropTypes.number,
};

export default Display;