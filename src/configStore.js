import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(reducer, {}, applyMiddleware(...[thunk, createLogger()]))
}

export default configureStore;