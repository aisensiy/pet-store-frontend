import { combineReducers } from 'redux';
import session from './session';
import requests from './requests';
import pets from './pets';
import pet from './pet';
import orders from './orders';
import cart from './cart';

export default combineReducers({
  session,
  requests,
  pets,
  pet,
  orders,
  cart
});
