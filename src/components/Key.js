import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Button = styled.button`
  background-color: ${props => props.backgroundColor || '#d3d3d3'};
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

export const Key = ({backgroundColor, keyValue, height, onClick, width}) => {

  return (
    <Button 
      backgroundColor={backgroundColor}
      height={height} 
      width={width} 
      onClick={onClick}
    >
        {keyValue}
    </Button>
  )
};

Key.propType = {
  keyValue: PropTypes.any,
  height: PropTypes.number,
  onClick: PropTypes.func,
  width: PropTypes.number,
};

export default Key;