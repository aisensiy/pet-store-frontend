import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { InputNumber, Button, Icon } from 'antd';
import styled from 'styled-components';
import Price from './Price';


const StyledForEmptyDiv = styled.div`
  padding: 5em 0;
  text-align: center;
  a {
    display: block;
    width: 6em;
    line-height: 1.5em;
    margin: 1em auto;
    padding: 0.5em 1em;
  }
`;

const EmptyShoppingCard = (props) => (
    <StyledForEmptyDiv>
      <p>购物车里没有任何商品</p>
      <Link className="ant-btn ant-btn-primary" to="/pets">继续购物</Link>
    </StyledForEmptyDiv>
);

const StyledDiv = styled.div`
  a {
    color: black;

    &:hover {
      color: black;
    }
  }


  .items {
    list-style: none;
    margin: 10px 0;
    border: 1px solid silver;
  }

  .items li {
    border-bottom: 1px solid silver;
    padding: 15px;

    &:last-child {
      border-bottom: none;
    }
  }

  .items li > * {
    display: inline-block;
  }

  .items li > .pet {
    width: 50%;
  }

  .items li > .price {
    width: 20%;
  }

  .items li > .quantity {
    width: 20%;
  }

  .items li > .delete {
    width: 10%;
  }
`;

const Number = styled.span`
  color: #ff0036;
  font-size: 1.2em;
`;

const Summary = styled.div`
  margin-top: 2em;
  text-align: right;

  .price {
    color: #ff0036;
    font-size: 1.2em;
  }

  &> * {
    display: inline-block;
    margin-left: 1em;
  }
`;

class NonEmptyShoppingCard extends React.Component {
  createOrder() {
    let { items, createOrder } = this.props;

    createOrder(items.map(item => {
      return {
        petId: item.pet.id,
        quantity: item.quantity
      }
    }));
  }

  getTotalPrice(items) {
    return items.map(item => {
      return item.quantity * (+item.pet.price.replace(/[^\d\.]+/g, ''))
    }).reduce((v, t) => t += v, 0);
  }

  render() {
    let { items, updateQuantity, removeItem } = this.props;
    return (
        <StyledDiv>
          <ul className="items">
            {items.map(item => {
              const { pet, pet: { id, name, price }, quantity } = item;
              return (
                  <li key={id}>
                    <Link className="pet" to={`/pets/${id}`}>{name}</Link>
                    <Price>{price.replace(/[^\d\.]+/g, '')}</Price>
                    <span className="quantity">
                      <InputNumber size="small" min={1} max={10} defaultValue={quantity} onChange={(value) => {
                        updateQuantity(pet, value);
                      }} />
                    </span>
                    <a className="delete" onClick={() => removeItem(item)}>
                      <Icon type="delete" />
                    </a>
                  </li>
              )
            })}
          </ul>
          <Summary className="summary">
            <p>已选择 <Number>{items.length}</Number> 件商品</p>
            <p>合计 <Price>{this.getTotalPrice(items)}</Price></p>
            <Button type="primary" onClick={() => this.createOrder()} size="large">结算</Button>
          </Summary>
        </StyledDiv>
    )
  }
}

class ShoppingCart extends React.Component {
  render() {
    let { items } = this.props;
    if (items.length == 0) {
      return <EmptyShoppingCard/>
    } else {
      return <NonEmptyShoppingCard {...this.props}/>;
    }
  }
}

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    pet: PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    }),
    quantity: PropTypes.number.isRequired
  })),
  createOrder: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired
};

ShoppingCart.defaultProps = {
  items: []
};

export default ShoppingCart;
