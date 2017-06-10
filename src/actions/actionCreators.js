export const fetchActionCreator = (fetcher, actionType) => (dispatch) => {
  const fetch = actionType;
  const success = `${actionType}_SUCCESS`;
  const fail = `${actionType}_FAIL`;

  dispatch({
    type: fetch
  });
  return fetcher.then(res => {
    dispatch({
      type: success,
      payload: res
    });
  }).catch(err => {
    dispatch({
      type: fail,
      payload: err
    });
  });
};

export const commandActionCreator = (fetch, actionType, successCallback, failCallback) => (dispatch) => {
  const request = actionType;
  const success = actionType + '_SUCCESS';
  const fail = actionType + '_FAIL';

  dispatch({
    type: request
  });

  return fetch.then(res => {
    dispatch({
      type: success
    });
    if (successCallback) {
      return successCallback(dispatch, res);
    } else {
      return Promise.resolve({});
    }
  }).catch(err => {
    dispatch({
      type: fail,
      payload: err.response.data
    });
    if (failCallback) {
      return failCallback(dispatch, err);
    } else {
      return Promise.reject({});
    }
  });
};
