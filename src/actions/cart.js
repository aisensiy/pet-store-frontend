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

export const updateQuantity = (value) => {
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