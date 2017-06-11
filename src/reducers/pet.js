export const LOAD_PET = 'LOAD_PET';

const reducer = (state = { price: '0' }, action) => {
  switch (action.type) {
    case LOAD_PET:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
