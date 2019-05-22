import React from 'react';
import KeyContainer from './KeyContainer';
import styled from 'styled-components';

const FuncWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FunctionKeys = () => {
  return(
    <FuncWrapper>
      <KeyContainer keyValue='+' />
      <KeyContainer keyValue='-' />
      <KeyContainer keyValue='x' />
      <KeyContainer keyValue='%' />
      <KeyContainer backgroundColor='#5d5dff' keyValue='=' />
    </FuncWrapper>
  )
};

export default FunctionKeys;