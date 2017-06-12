import React from 'react';
import { connect } from 'react-redux';
import TopNavView from '../components/TopNav';
import { logout } from '../actions/login';
import { withRouter } from 'react-router-dom';
import { getCount } from '../reducers/cart';

class TopNav extends React.Component {
  logout() {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    return (
        <TopNavView {...this.props} logout={this.logout.bind(this)} />
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.session,
  itemCount: getCount(state.cart)
});

export default withRouter(connect(mapStateToProps, {
  logout
})(TopNav));
