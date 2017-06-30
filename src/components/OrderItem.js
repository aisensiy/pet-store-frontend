import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import Price from './Price';
import format from 'date-fns/format'
import styled from 'styled-components';

const StyledCard = styled(Card)`
  ul {
    padding: 10px 24px;
  }
  ul li > span {
    display: inline-block;
    width: 16em;
  }
  ul li > .price {
    float: right;
    width: auto;
  }
  .footer {
    border-top: 1px solid #e9e9e9;
    padding: 10px 24px;
    text-align: right;
  }
`;

class OrderItem extends React.Component {
  render() {
    const {order: {items, orderedDate, id, price}} = this.props;
    return (
        <StyledCard bodyStyle={{ padding: 0 }}
              title={<p><strong>{format(new Date(orderedDate), "YY-MM-DD")}</strong> 订单号: {id}</p>}>
          <ul className="items">
            {items.map(item => {
              const { petId, price, quantity, name } = item;
              return (
                  <li key={petId}>
                    <span><Link className="pet" to={`/pets/${petId}`}>{name}</Link> &times; {quantity}</span>
                    <Price>{price.replace(/[^\d\.]+/g, '')}</Price>
                  </li>
              )
            })}
          </ul>
          <div className="footer">
            总价：<Price>{price.replace(/[^\d\.]+/g, '')}</Price>
          </div>
        </StyledCard>
    );
  }
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    orderedDate: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      petId: PropTypes.any.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }))
  })
};
OrderItem.defaultProps = {};

export default OrderItem;
