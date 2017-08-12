import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './ListItem'
import { Icon } from 'antd-mobile'

class ListView extends Component {
  render() {
    return (
      <div>
        {
          this.props.data.map(item => (<Item
            key={item.id}
            title={item.title}
            author={item.author.loginname}
            avatarUrl={item.author.avatar_url}
          />))
        }
        <footer
          style={{ textAlign: 'center' }}
          ref={footer => { this.footerEl = footer }}
        >
          <Icon
            type="loading"
            size="md"
          />
        </footer>
      </div >
    );
  }

  componentDidMount() {
    this.props.loadMoreData()
    let isLoading = false;
    let timeoutId;
    const scrollCB = () => {
      const footerRect = this.footerEl.getBoundingClientRect();
      if (footerRect.bottom < window.screen.height - 50) {//这个50表示tabBar的高度
        console.log(footerRect.bottom, window.screen.height - 50)
      }
    }
    window.addEventListener('scroll', event => {
      if (isLoading) return;
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(scrollCB, 50);
    })
  }
}



ListView.PropTypes = {
  data: PropTypes.array.isRequired,
  loadMoreData: PropTypes.func.isRequired,
}

export default ListView