import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  sagaAction
} from './actions';
import {
  selectData
} from './selectors';

class SampleContainer extends Component {

  componentWillMount() {
    this.props.sampleSaga();
  }

  render() {
    return (
      <div>
        <h1>Sample Container</h1>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  data: selectData()
});

function mapDispatchToProps(dispatch) {
  return {
    sampleSaga: () => dispatch(sagaAction())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);