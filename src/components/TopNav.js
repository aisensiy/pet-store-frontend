import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon, Badge } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class TopNav extends Component {
  isEmpty = (obj) => {
    return !obj || Object.keys(obj).length === 0;
  };

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let { user, itemCount } = this.props;

    return (
        <div style={{backgroundColor: '#404040'}}>
          <Menu
              mode="horizontal"
              theme="dark"
              style={{
                lineHeight: '64px',
                float: 'left'
              }}
          >
            <Menu.Item key="exam-view">
              <Link to="/pets">宠物列表</Link>
            </Menu.Item>

          </Menu>
          {this.isEmpty(user) &&
          <Menu
              mode="horizontal"
              theme="dark"
              style={{
                lineHeight: '64px',
                float: 'right'
              }}
          >
            <Menu.Item key="login">
              <Link to="login">登录</Link>
            </Menu.Item>
            <Menu.Item key="register">
              <Link to="register">注册</Link>
            </Menu.Item>

          </Menu>}

          {!this.isEmpty(user) &&
          <Menu
              mode="horizontal"
              theme="dark"
              style={{
                lineHeight: '64px',
                float: 'right'
              }}
          >

            <Menu.Item key="shopping-cart"><Link to="/cart"><Icon type="shopping-cart" />购物车 <Badge count={itemCount}/></Link></Menu.Item>
            <Menu.Item key="orders"><Link to="/orders">我的订单</Link></Menu.Item>
            <SubMenu title={<span><Icon type="user" />{user.username}</span>}>
              <Menu.Item key="setting:2"><a href="#" onClick={this.logout.bind(this)}>Logout</a></Menu.Item>
            </SubMenu>
          </Menu>}

          <div style={{clear: 'both'}}/>
        </div>
    )
  }
}

TopNav.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }),
  itemCount: PropTypes.number.isRequired,
  logout: PropTypes.func.isRequired
};

export default TopNav;
