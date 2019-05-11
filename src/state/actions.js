import {
  SET_DISPLAY_VALUE,
  SET_MATH_SYMBOL,
} from './constants';

export const setDisplayValue = ({newValue}) => {
  return {
    type: SET_DISPLAY_VALUE, 
    payload: {newValue},  
  };
}

export const setMathSymbol = ({symbol}) => {
  return {
    type: SET_MATH_SYMBOL,
    payload: {symbol},
  };
}