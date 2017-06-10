export const fetchReducerCreator = (initState, actionType) => (state=initState, action) => {
  const fetch = actionType;
  const success = `${actionType}_SUCCESS`;
  const fail = `${actionType}_FAIL`;

  switch (action.type) {
    case fetch:
      return {
        ...state,
        isLoading: true
      };
    case success:
      return {
        ...state,
        error: null,
        isLoading: false,
        data: action.payload
      };
    case fail:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export const reducerCreator = (actionType) =>  {
  const request = actionType;
  const success = `${actionType}_SUCCESS`;
  const fail = `${actionType}_FAIL`;
  const reset = `${actionType}_RESET`;

  const initState = {
    isLoading: false,
    error: null,
    isSuccess: false
  };
  return (state=initState, action) => {
    switch (action.type) {
      case request:
        return {
          ...state,
          isLoading: true
        };
      case success:
        return {
          ...state,
          error: null,
          isLoading: false,
          isSuccess: true
        };
      case fail:
        return {
          ...state,
          isSuccess: false,
          error: action.payload,
          isLoading: false
        };
      case reset:
        return initState;
      default:
        return state;
    }
  }
};
