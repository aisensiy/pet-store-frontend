export const LOAD_PETS = 'LOAD_PETS';

const reducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case LOAD_PETS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
