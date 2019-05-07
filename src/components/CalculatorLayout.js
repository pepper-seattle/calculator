import React from 'react';
import styled from 'styled-components';

import Display from './Display';
import FunctionKeys from './FunctionKeys';
import Keypad from './Keypad';

const Div = styled.div`
  color: #565656;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300;
`;

const Pad = styled.div`
  display: flex;
`;

export const CalculatorLayout = () => {
  return(
    <Div>
      <h1>CALCULATOR</h1>
      <Display />
      <Pad>
        <Keypad />
        <FunctionKeys />
      </Pad>
    </Div>
  )
};

export default CalculatorLayout;