import React from 'react';
import styled from 'styled-components';

import Key from './Key';

const Div = styled.div`
  background: #000;
  width: 100%
`;

const Row = styled.div`
  display: flex;
`;

export const Keypad = () => {
  return(
    <Div>
      <Row>
        <Key keyValue='7' />
        <Key keyValue='8' />
        <Key keyValue='9' />
      </Row>
      <Row>
        <Key keyValue='4' />
        <Key keyValue='5' />
        <Key keyValue='6' />
      </Row>
      <Row>
        <Key keyValue='1' />
        <Key keyValue='2' />
        <Key keyValue='3' />
      </Row>
      <Key height={75} width={225} keyValue={0} />
    </Div>
  )
};

export default Keypad;