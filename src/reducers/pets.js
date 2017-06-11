export const LOAD_PETS = 'LOAD_PETS';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
