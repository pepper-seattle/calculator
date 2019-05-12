import {SET_DISPLAY_VALUE, SET_MATH_SYMBOL} from './constants';

export const DEFAULT_STATE = {
  displayValue: 0,
  activeSymbol: '',
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_DISPLAY_VALUE:
        return {
          ...state,
          displayValue: action.payload.displayValue,
        };

    case SET_MATH_SYMBOL:
        return {
          ...state,
          activeSymbol: action.payload.mathFunction,
        };
  
    default: 
      return state;
  }
};