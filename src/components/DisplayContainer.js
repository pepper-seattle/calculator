import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Display from './Display';

export class DisplayContainer extends Component {
  render() {
    const {displayValue} = this.props;
    return <Display displayValue={displayValue} />;
  }

};

DisplayContainer.propTypes = {
  displayValue: PropTypes.number,
};

const mapStateToProps = ({calculator}) => ({
  displayValue: calculator.displayValue,
});

export default connect(mapStateToProps, null)(DisplayContainer);