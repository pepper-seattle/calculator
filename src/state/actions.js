import {
  SET_DISPLAY_VALUE,
  SET_FIRST_VALUE,
  SET_SECOND_VALUE,
  SET_MATH_SYMBOL
} from './constants';

export const setDisplayValue = (displayValue) => {
  return {
    type: SET_DISPLAY_VALUE, 
    payload: {displayValue},  
  };
}

export const setFirstValue = (firstValue) => {
  return {
    type: SET_FIRST_VALUE, 
    payload: {firstValue},  
  };
}

export const setSecondValue = (secondValue) => {
  return {
    type: SET_SECOND_VALUE, 
    payload: {secondValue},  
  };
}

export const setMathSymbol = (symbol) => {
  return {
    type: SET_MATH_SYMBOL,
    payload: {symbol},
  };
}