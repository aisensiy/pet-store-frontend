import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout } from 'antd';
import TopNav from './containers/TopNav';
import LoginPage from './pages/LoginPage';
import PetsPage from './pages/PetsPage';
import RegistrationPage from './pages/RegistrationPage';
import storage from './utils/storage';
import { loadCurrent } from './actions/login';

import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  componentWillMount() {
    this.props.loadCurrent();
  }

  render() {
    return (
        <Router>
          <div className="App">

            <Layout>
              <Header className="header">
                <Link className="logo" to="/"></Link>
                <TopNav/>
              </Header>

              <Content style={{ padding: '0 50px' }}>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegistrationPage}/>
                <Route path="/pets" component={PetsPage}/>
              </Content>

              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
          </div>
        </Router>
    );
  }
}

const auth = {
  isAuthenticated: () => {
    return !!storage.getItem('token');
  }
};

const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated() ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{
              pathname: '/login',
              state: { from: props.location }
            }}/>
        )
    )}/>
);

export default connect(null, { loadCurrent })(App);