import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    background: '#3c3c3c',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 75,
  },
  values: {
    fontSize: 56,
    paddingRight: 5,
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