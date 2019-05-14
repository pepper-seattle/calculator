import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setDisplayValue, setFirstValue, setSecondValue, setMathSymbol} from '../state/actions';

import Key from './Key';

export const KeyContainer = (props) => {
  const {
    firstValue, 
    secondValue,
    setDisplayValue,
    setFirstValue,
    setSecondValue,
    setMathSymbol,
  } = props;

  function clickHandler(e) {
    const keyValue = e.target.innerHTML;

    if(!isNaN(keyValue) && isNaN(firstValue)){
      console.log('display and first ' + keyValue + ' was clicked');
      setDisplayValue(parseInt(keyValue));
      setFirstValue(parseInt(keyValue));
    } 
    
    if(!isNaN(firstValue) && isNaN(secondValue)){
      console.log('display and second ' + keyValue + ' was clicked');
      setDisplayValue(parseInt(keyValue));
      setSecondValue(parseInt(keyValue));
    } 

    if(isNaN(keyValue)){
      console.log('symbol ' + keyValue);
      setMathSymbol(keyValue);
    }
    return;
  }

  return <Key onClick={(e) => clickHandler(e)} {...props} />
};

KeyContainer.propTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
  setDisplayValue: PropTypes.func,
};

const mapStateToProps = state => ({
  firstValue: state.firstValue,
  secondValue: state.secondValue,
});

const mapDispatchToProps = (dispatch) => {
  return{
    setDisplayValue: (value) => {
      dispatch(setDisplayValue(value));
    },
    setFirstValue: (value) => {
      dispatch(setFirstValue(value));
    },
    setSecondValue: (value) => {
      dispatch(setSecondValue(value));
    },
    setMathSymbol: (value) => {
      dispatch(setMathSymbol(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyContainer);