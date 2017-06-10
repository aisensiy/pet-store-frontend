import { combineReducers } from 'redux';
import session from './session';
import requests from './requests';
import pets from './pets';

export default combineReducers({
  session,
  requests,
  pets
});
