import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';

class App extends Component {

  render() {
    return (
      <TabBar>
        <TabBar.Item
          key="home"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(svg/home.svg) center center /  0.42rem 0.42rem no-repeat'
          }}
          />
          }
        />
        <TabBar.Item
          key="collection"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(svg/collection.svg) center center /  0.42rem 0.42rem no-repeat'
          }}
          />
          }
        />
        <TabBar.Item
          key="edit"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(svg/edit.svg) center center /  0.42rem 0.42rem no-repeat'
          }}
          />
          }
        />
        <TabBar.Item
          key="activity"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(svg/notification.svg) center center /  0.42rem 0.42rem no-repeat'
          }}
          />
          }
        />
        <TabBar.Item
          key="profile"
          icon={<div style={{
            width: '0.44rem',
            height: '0.44rem',
            background: 'url(svg/profile.svg) center center /  0.42rem 0.42rem no-repeat'
          }}
          />
          }
        />
      </TabBar>
    )
  }
}

export default App;
