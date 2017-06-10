import { reducerCreator } from './reducerCreators';
import { combineReducers } from 'redux';

export default combineReducers({
  login: reducerCreator("LOGIN_REQUEST"),
  pets: reducerCreator("FETCH_PETS_REQUEST"),
  register: reducerCreator("REGISTER_REQUEST")
});
