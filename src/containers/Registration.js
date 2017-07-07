import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import { register } from '../actions/register';
import { withRouter } from 'react-router-dom';


class Registration extends React.Component {
  register(values) {
    return this.props.register(values).then(() => {
      this.props.history.push('/login');
    });
  };

  render() {
    return <RegistrationForm onSubmit={this.register.bind(this)}/>
  }
}

const mapDispatchToProps = {
  register
};

export default withRouter(connect(undefined, mapDispatchToProps)(Registration));
