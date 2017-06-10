import * as api from '../api/index';
import * as actionTypes from '../reducers/pets';
import { commandActionCreator } from './actionCreators';

export const loadPets = () => {
  return commandActionCreator(api.fetchPets(), 'PETS_REQUEST', (dispatch, res) => {
    dispatch({
      type: actionTypes.LOAD_PETS,
      payload: res
    });

    return Promise.resolve({});
  });
};
