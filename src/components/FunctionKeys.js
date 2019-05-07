import React from 'react';
import Key from './Key';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FunctionKeys = () => {
  return(
    <Div>
      <Key keyValue='+' />
      <Key keyValue='-' />
      <Key keyValue='x' />
      <Key keyValue='%' />
    </Div>
  )
};

export default FunctionKeys;