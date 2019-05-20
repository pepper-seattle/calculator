import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {calculation} from '../helpers/calculations';

import CalculatorLayout from './CalculatorLayout';

export const CalculatorContainer = (props) => {
  const {firstValue, secondValue, mathFunc} = props;
  calculation(firstValue, secondValue, mathFunc);
  return(
    <CalculatorLayout />
  )
};

CalculatorContainer.PropTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
  mathFunc: PropTypes.string,
};

const mapStateToProps = (state) => ({
  firstValue: state.firstValue,
  secondValue: state.secondValue,
  mathFunc: state.activeSymbol,
});


export default connect(mapStateToProps)(CalculatorContainer);