import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  background: #3c3c3c;
  color: #fff;
  display: flex;
  align-tems: center;
  width: 100%;
  height: 75px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 56px;
  padding-right: 5px;
  width: 100%;
`;

export const Display = props => {
  const {displayValue} = props;
  return(
    <Div>
      <Span>{displayValue}</Span>
    </Div>
  )
};

Display.defaultProps = {
  displayValue: 0,
};

Display.propTypes = {
  displayValue: PropTypes.number,
};

export default Display;