import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout } from 'antd';
import TopNav from './containers/TopNav';
import LoginPage from './pages/LoginPage';
import PetsPage from './pages/PetsPage';
import RegistrationPage from './pages/RegistrationPage';
import CartPage from './pages/CartPage';
import PetPage from './pages/PetPage';
import OrdersPage from './pages/OrdersPage';
import storage from './utils/storage';
import { loadCurrent } from './actions/login';
import { loadCart } from './actions/cart';

import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {
  componentWillMount() {
    this.props.loadCurrent();
    this.props.loadCart();
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
                <Route exact path="/pets" component={PetsPage}/>
                <Route exact path="/" component={PetsPage}/>
                <PrivateRoute exact path="/orders" component={OrdersPage}/>
                <PrivateRoute exact path="/pets/:pet_id" component={PetPage}/>
                <PrivateRoute exact path="/cart" component={CartPage}/>
              </Content>

              <Footer style={{ textAlign: 'center' }}>
                ©2017 A Demo App
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

export default connect(null, { loadCurrent, loadCart })(App);
