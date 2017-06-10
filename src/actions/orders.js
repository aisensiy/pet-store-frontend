import * as api from '../api/index';
import * as actionTypes from '../reducers/orders';
import { commandActionCreator } from './actionCreators';

export const createOrder = (username, orders) => {
  return commandActionCreator(api.createOrder(username, orders), 'CREATE_ORDER_REQUEST', (dispatch, res) => {
    return Promise.resolve({});
  });
};

export const fetchOrders = (username) => {
  return commandActionCreator(api.fetchOrders(username), 'FETCH_ORDERS_REQUEST', (dispatch, res) => {
    dispatch({
      type: actionTypes.LOAD_ORDERS,
      payload: res
    });

    return Promise.resolve({});
  })
};