import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setDisplayValue} from '../state/actions';

import Key from './Key';

export const KeyContainer = ({setDisplayValues, ...props}) => {
  function clickHandler(e) {
    const keyValue = parseInt(e.target.innerHTML);
    if(!isNaN(keyValue)){
      console.log(keyValue + ' was clicked');
      setDisplayValues(keyValue);
    }
    return;
  }

  return <Key onClick={(e) => clickHandler(e)} {...props} />
};

KeyContainer.propTypes = {
  setDisplayValues: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return{
    setDisplayValues: (value) => {
      dispatch(setDisplayValue(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(KeyContainer);