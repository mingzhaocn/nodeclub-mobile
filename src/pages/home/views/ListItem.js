import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {

  render() {
    return (
      <div style={{ height: '2rem', with: '100 %' }}>
        <img alt="😊" src={'demo' || this.props.avatarUrl}
          style={{ height: '1rem', borderRadius: '50%' }}
        />
        {'title' || this.props.title}
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired
}