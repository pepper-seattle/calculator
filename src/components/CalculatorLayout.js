import React from 'react';
import styled from 'styled-components';

import DisplayContainer from './DisplayContainer';
import FunctionKeys from './FunctionKeys';
import Keypad from './Keypad';

const Wrapper = styled.div`
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
    <Wrapper>
      <h1>CALCULATOR</h1>
      <DisplayContainer />
      <Pad>
        <Keypad />
        <FunctionKeys />
      </Pad>
    </Wrapper>
  )
};

export default CalculatorLayout;