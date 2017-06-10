import * as api from '../api/index';
import { commandActionCreator } from './actionCreators';

const request = "REGISTER";

export const register = (values) => {
  return commandActionCreator(api.register(values), request, (dispatch, res) => {
    return Promise.resolve({});
  });
};