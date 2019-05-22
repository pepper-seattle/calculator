import {
  SET_DISPLAY_VALUE,
  SET_PREV_NUM,
  SET_MATH_SYMBOL
} from './constants';

export const setDisplayValue = (displayValue) => {
  return {
    type: SET_DISPLAY_VALUE, 
    payload: {displayValue},  
  };
};

export const setPrevNum = (prevNum) => {
  return {
    type: SET_PREV_NUM, 
    payload: {prevNum},  
  };
};

export const setMathSymbol = (symbol) => {
  return {
    type: SET_MATH_SYMBOL,
    payload: {symbol},
  };
};