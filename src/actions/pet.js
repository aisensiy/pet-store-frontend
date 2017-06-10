import * as api from '../api/index';
import * as actionTypes from '../reducers/pet';
import { commandActionCreator } from './actionCreators';

export const loadPet = (petId) => {
  return commandActionCreator(api.fetchPet(petId), 'PET_REQUEST', (dispatch, res) => {
    dispatch({
      type: actionTypes.LOAD_PET,
      payload: res
    });

    return Promise.resolve({});
  });
};