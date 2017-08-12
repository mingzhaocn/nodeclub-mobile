import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadTopics } from '../action'
import { connect } from 'react-redux'
import ListView from './ListView'

class Home extends Component {

  loadMoreData = () => {
    this.props.loadTopics({ page: this.props.topicsParam.page + 1, limit: 10 })
  }

  render() {
    return (
      <div style={{ marginBottom: 0 }}>
        <ListView
          data={this.props.topics}
          loadMoreData={this.loadMoreData}
        />
        <div style={{ height: '20rem' }} />
      </div >
    );
  }
}

Home.propTypes = {
  topics: PropTypes.array.isRequired,
  loadTopics: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    topics: state.home.topics,
    topicsParam: state.home.topicsParam
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadTopics: (param) => {
      dispatch(loadTopics(param));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)