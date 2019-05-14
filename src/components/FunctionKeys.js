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
    </FuncWrapper>
  )
};

export default FunctionKeys;