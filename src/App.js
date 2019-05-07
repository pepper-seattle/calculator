import React from 'react';
import styled from 'styled-components';

import CalculatorLayout from './components/CalculatorLayout';

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <Div>
      <CalculatorLayout />
    </Div>
  );
}

export default App;
