import React from 'react';
import CartView from '../components/ShoppingCart';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../actions/cart';
import { createOrder } from '../actions/orders';
import { getItems } from '../reducers/cart';

class Cart extends React.Component {
  createOrder(values) {
    let { session, createOrder, history, clearCart } = this.props;
    return createOrder(session.username, values).then(() => {
      clearCart();
      history.push("/orders");
    });
  }

  render() {
    return (
      <CartView {...this.props} createOrder={this.createOrder.bind(this)}/>
    );
  }
}

const mapStoreToProps = ({cart, session}) => {
  return {
    items: getItems(cart),
    session
  };
};

export default withRouter(connect(mapStoreToProps, {
  removeItem,
  updateQuantity,
  createOrder,
  clearCart
})(Cart));
