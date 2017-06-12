import storage from '../utils/storage';
import * as actionTypes from '../reducers/cart';

export const addItem = (pet) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      pet,
      quantity: 1
    }
  }
};

export const updateQuantity = (pet, quantity) => {
  return {
    type: actionTypes.UPDATE_QUANTITY,
    payload: {
      pet,
      quantity
    }
  }
};

export const removeItem = (value) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: value
  }
};

export const loadCart = () => {
  if (!storage.getItem("cart")) {
    return {
      type: actionTypes.CLEAR_CART
    };
  }

  let payload = JSON.parse(storage.getItem("cart"));
  return {
    type: actionTypes.CART_LOADED,
    payload: payload
  };
};

export const clearCart = () => {
  return { type: actionTypes.CLEAR_CART }
};