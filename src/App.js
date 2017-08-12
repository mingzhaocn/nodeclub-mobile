import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import { connect } from 'react-redux'
import { selectTab } from './action'

import { view as Home } from './pages/home'

class App extends Component {

  createIcon = (url) => {
    return (
      <div
        style={{
          width: '0.44rem',
          height: '0.44rem',
          background: `url(${url}) center center /  0.42rem 0.42rem no-repeat`
        }}
      />
    )
  }

  onPress = (key) => {
    this.props.onSelectTab(key)
  }



  render() {
    return (
      //TODO：列表需要知道 TabBar 的位置，因为要实现滑动加载，有没有更好的实践方式？
      <TabBar id="App">
        <TabBar.Item
          key="home"
          selected={this.props.selectedTab === 'home'}
          onPress={this.onPress.bind(this, 'home')}
          icon={this.createIcon('svg/home.svg')}
          selectedIcon={this.createIcon('svg/home_blue.svg')}
        >
          <Home
          />
        </TabBar.Item>
        <TabBar.Item
          key="collection"
          selected={this.props.selectedTab === 'collection'}
          onPress={this.onPress.bind(this, 'collection')}
          icon={this.createIcon('svg/collection.svg')}
          selectedIcon={this.createIcon('svg/collection_blue.svg')}
        />
        <TabBar.Item
          key="edit"
          selected={this.props.selectedTab === 'edit'}
          onPress={this.onPress.bind(this, 'edit')}
          icon={this.createIcon('svg/edit.svg')}
          selectedIcon={this.createIcon('svg/edit_blue.svg')}
        />
        <TabBar.Item
          key="activity"
          selected={this.props.selectedTab === 'activity'}
          onPress={this.onPress.bind(this, 'activity')}
          icon={this.createIcon('svg/notification.svg')}
          selectedIcon={this.createIcon('svg/notification_blue.svg')}
        />
        <TabBar.Item
          key="profile"
          selected={this.props.selectedTab === 'profile'}
          onPress={this.onPress.bind(this, 'profile')}
          icon={this.createIcon('svg/profile.svg')}
          selectedIcon={this.createIcon('svg/profile_blue.svg')}
        />
      </TabBar>
    )
  }
}

App.propTypes = {
  onSelectTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedTab: state.app.selectedTab
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelectTab: selectedTab => {
      dispatch(selectTab(selectedTab));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
