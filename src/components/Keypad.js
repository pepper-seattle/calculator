import React from 'react';
import styled from 'styled-components';

import KeyContainer from './KeyContainer';

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
        <KeyContainer keyValue={7} />
        <KeyContainer keyValue={8} />
        <KeyContainer keyValue={9} />
      </Row>
      <Row>
        <KeyContainer keyValue={4} />
        <KeyContainer keyValue={5} />
        <KeyContainer keyValue={6} />
      </Row>
      <Row>
        <KeyContainer keyValue={1} />
        <KeyContainer keyValue={2} />
        <KeyContainer keyValue={3} />
      </Row>
      <KeyContainer height={75} width={225} keyValue={0} />
      <KeyContainer backgroundColor='#ffa500' height={75} width={225} keyValue={'AC'} />
    </Div>
  )
};

export default Keypad;