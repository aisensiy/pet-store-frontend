import * as api from '../api';
import { commandActionCreator } from './actionCreators';
import { SESSION_CREATED, SESSION_DESTROYED } from '../reducers/session';
import decode from 'jwt-decode';
import storage from '../utils/storage';

const request = 'LOGIN';
const requestReset = request + '_RESET';


export const login = (username, password) => {
  return commandActionCreator(api.login(username, password), request, (dispatch, res) => {
    let payload = decode(res);
    dispatch({
      type: SESSION_CREATED,
      payload: {
        username: payload.username,
        email: payload.email
      }
    });
    storage.setItem('token', res);
    return Promise.resolve({});
  });
};

export const resetLogin = () => ({
  type: requestReset
});

export const logout = () => {
  storage.removeItem("token");
  return {
    type: SESSION_DESTROYED
  };
};

export const loadCurrent = () => {
  if (!storage.getItem("token")) {
    return { type: 'NULL' };
  }

  let payload = decode(storage.getItem("token"));
  return {
    type: SESSION_CREATED,
    payload: {
      username: payload.username,
      email: payload.email
    }
  };
};
