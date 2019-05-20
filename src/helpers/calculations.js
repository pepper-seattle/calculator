import {setDisplayValue} from '../state/reducers';

const calculation = (num1, num2, mathFunc) => {
  let result;
	switch (mathFunc) {
    case '+':
      return result = num1 + num2;
      break;
    case '-':
      return result = num1 - num2;
      break;
    case 'x':
      return result = num1 * num2;
      break;
    case '%':
      return result = num1 / num2;
      break;
    default:
      console.log('nope');
      break;
  }

  setDisplayValue(result);
};