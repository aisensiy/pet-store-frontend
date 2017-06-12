import React from 'react';
import OrderItem from '../components/OrderItem';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { fetchOrders } from '../actions/orders';

class Orders extends React.Component {
  componentDidMount() {
    this.props.fetchOrders(this.props.session.username);
  }

  render() {
    let { orders } = this.props;
    return (
        <div>
          <Row gutter={16}>
            {orders.map(order => {
              return <Col span={24} style={{margin: "2em 0"}} key={order.id}><OrderItem order={order} /></Col>
            })}
          </Row>
        </div>
    );
  }
}

const mapStateToProps = ({orders, session}) => ({
  orders: orders.data,
  session
});

export default connect(mapStateToProps, { fetchOrders })(Orders);
