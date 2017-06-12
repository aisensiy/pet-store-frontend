import * as api from '../api/index';
import * as actionTypes from '../reducers/orders';
import { commandActionCreator } from './actionCreators';

export const createOrder = (username, items) => {
  console.log(username);
  return commandActionCreator(api.createOrder(username, items), 'CREATE_ORDER_REQUEST', (dispatch, res) => {
    dispatch({
      type: "CREATE_ORDER",
      payload: {
        username, items
      }
    });
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