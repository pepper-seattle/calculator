import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #d3d3d3;
  border: 1px black solid;
  color: #000;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  width: ${props => props.width || 75}px;
  height: ${props => props.height || 75}px;
`;

export const Key = ({keyValue, height, width}) => {
  return <Button height={height} width={width}>{keyValue}</Button>
};

Key.propType = {
  keyValue: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Key;