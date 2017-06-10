export const LOAD_ORDERS = 'LOAD_ORDERS';

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case LOAD_ORDERS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
