import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setDisplayValue} from '../state/actions';

import Key from './Key';

const displayArray = [];

export const KeyContainer = (props) => {
  const {
    setDisplayValue,
  } = props;

  const currentNum = (num, arr) => {
    arr.push(num);
    return arr.join('');
  };

  const clickHandler = (e) => {
    const keyValue = parseInt(e.target.innerHTML);
    let displayValues = currentNum(keyValue, displayArray);
    setDisplayValue(parseInt(displayValues));
  };

  return <Key onClick={(e) => clickHandler(e)} {...props} />
};

KeyContainer.propTypes = {
  setDisplayValue: PropTypes.func,
};

const mapStateToProps = state => ({
  displayValue: state.firstValue,
});

const mapDispatchToProps = (dispatch) => {
  return{
    setDisplayValue: (value) => {
      dispatch(setDisplayValue(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyContainer);