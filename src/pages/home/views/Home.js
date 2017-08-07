import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadTopics } from '../action'
import { connect } from 'react-redux'

class Home extends Component {

  onClick = () => {
    this.props.loadTopics({})
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>loadTopics</button>
        {JSON.stringify(this.props.topics)}
      </div>
    );
  }
}

Home.propTypes = {
  topics: PropTypes.array.isRequired,
  loadTopics: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    topics: state.home.topics
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadTopics: param => {
      dispatch(loadTopics(param));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)