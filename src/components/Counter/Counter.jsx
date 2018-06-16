import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button } from 'reactstrap';

import { incrementCount, decrementCount } from '../../actions/countActions';

class Counter extends Component {
  constructor(props){
    super(props);

    this.onIncrementCount = this.onIncrementCount.bind(this);
    this.onDecrementCount = this.onDecrementCount.bind(this);
  }

  onIncrementCount = () => this.props.incrementCount();
  onDecrementCount = () => this.props.decrementCount();

  render() {
    return (
      <div id="counter">
        <Button onClick={ this.onIncrementCount } id="counter-btn" color="danger">+</Button>
        <Button onClick={ this.onDecrementCount } id="counter-btn" color="primary">-</Button>
        <div id="counter-num">{ this.props.count }</div>
      </div>
    );
  }
}

Counter.propTypes = {
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
  count: PropTypes.number,
};

const mapStateToProps = state => ({
  count: state.count
});

export default connect( mapStateToProps, { incrementCount, decrementCount })(Counter);