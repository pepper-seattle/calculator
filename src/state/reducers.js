import {
  SET_DISPLAY_VALUE,
  SET_PREV_NUM,
  SET_MATH_SYMBOL
} from './constants';

export const DEFAULT_STATE = {
  displayValue: 0,
  prevNum: 0,
  mathSymbol: undefined,
}

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_DISPLAY_VALUE:
        return {
          ...state,
          displayValue: action.payload.displayValue,
        };

    case SET_PREV_NUM:
        return {
          ...state,
          prevNum: action.payload.prevNum,
        };

    case SET_MATH_SYMBOL:
        return {
          ...state,
          mathSymbol: action.payload.symbol,
        };
  
    default: 
      return state;
  }
};