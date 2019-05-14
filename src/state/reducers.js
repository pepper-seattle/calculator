import {
  SET_DISPLAY_VALUE, 
  SET_FIRST_VALUE,
  SET_SECOND_VALUE,
  SET_MATH_SYMBOL
} from './constants';

export const DEFAULT_STATE = {
  displayValue: 0,
  firstValue: undefined,
  secondValue: undefined,
  activeSymbol: undefined,
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_DISPLAY_VALUE:
        return {
          ...state,
          displayValue: action.payload.displayValue,
        };

    case SET_FIRST_VALUE:
        return {
          ...state,
          firstValue: action.payload.firstValue,
        };

    case SET_SECOND_VALUE:
      return {
        ...state,
        secondValue: action.payload.secondValue,
      };

    case SET_MATH_SYMBOL:
        return {
          ...state,
          activeSymbol: action.payload.symbol,
        };
  
    default: 
      return state;
  }
};