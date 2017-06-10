export const SESSION_CREATED = 'SESSION_CREATED';
export const SESSION_DESTROYED = 'SESSION_DESTROYED';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SESSION_CREATED:
      return action.payload;
    case SESSION_DESTROYED:
      return {};
    default:
      return state;
  }
};

export default reducer;
