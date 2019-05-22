import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  setDisplayValue, 
  setPrevNum, 
  setMathSymbol,
} from '../state/actions';

import {operators} from '../helpers/calculations';
import Key from './Key';

let displayArray = [];

export const KeyContainer = (props) => {
  const {
    mathSymbol,
    prevNum,
    setDisplayValue,
    setMathSymbol,
    setPrevNum,
  } = props;

  const currentDisplayNum = (num, displayArray) => {
    displayArray.push(parseInt(num));
    return displayArray.join('');
  };

  // Bugs:
  // Running a proper calculation and then continuously pressing '=' will rerun it 
  // setPrevNum 
  const runCalculation = () => {
    let displayValue = parseInt(displayArray.join(''));
    setPrevNum(parseInt(prevNum));
    let result = operators[mathSymbol](prevNum, displayValue);
    setDisplayValue(result);
  };

  const clickHandler = (e) => {
    let keyValue = e.target.innerHTML;

    if(keyValue === '='){
      runCalculation();
    }

    // Sets the math operator for the calculation and 
    // clears the saved display value array to make way for the second value
    if(keyValue !== '=' && isNaN(keyValue)){
      setPrevNum(parseInt(displayArray.join('')));
      setMathSymbol(keyValue);
      displayArray = [];
    }

    // Limiting to a result of 8 numbers for now
    if(displayArray.length < 4 && !isNaN(keyValue)){
      const numValue = parseInt(keyValue);
      let displayValues = currentDisplayNum(numValue, displayArray);
      setDisplayValue(parseInt(displayValues));
    }
  };

  return <Key onClick={(e) => clickHandler(e)} {...props} />
};

KeyContainer.propTypes = {
  displayValue: PropTypes.number,
  prevNum: PropTypes.number,
  setDisplayValue: PropTypes.func,
  setMathSymbol: PropTypes.func,
  setPrevNum: PropTypes.func,
};

const mapStateToProps = ({calculator}) => ({
  displayValue: calculator.displayValue,
  mathSymbol: calculator.mathSymbol,
  prevNum: calculator.prevNum,
});

const mapDispatchToProps = (dispatch) => {
  return{
    setDisplayValue: (value) => {
      dispatch(setDisplayValue(value));
    },
    setMathSymbol: (value) => {
      dispatch(setMathSymbol(value));
    },
    setPrevNum: (value) => {
      dispatch(setPrevNum(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyContainer);