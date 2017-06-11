import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { login } from '../actions/login';
import { Redirect, withRouter } from 'react-router-dom';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login(values) {
    let { username, password } = values;
    return this.props.login(username, password).then(() => {
      this.setState({ redirectToReferrer: true })
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
          <Redirect to={from}/>
      )
    }

    return (
        <LoginForm onSubmit={this.login.bind(this)}/>
    );
  }
}

const mapDispatchToProps = {
  login
};

export default withRouter(connect(undefined, mapDispatchToProps)(Login));
