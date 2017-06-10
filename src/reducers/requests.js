import { reducerCreator } from './reducerCreators';
import { combineReducers } from 'redux';

export default combineReducers({
  login: reducerCreator("LOGIN"),
  pets: reducerCreator("FETCH_PETS_REQUEST")
});
