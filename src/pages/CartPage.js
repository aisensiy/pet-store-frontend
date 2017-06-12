import React from 'react';
import Cart from '../containers/Cart';

class CartPage extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: 'white', marginTop: '30px'}}>
        <Cart />
      </div>
    );
  }
}

export default CartPage;
