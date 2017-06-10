export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

const reducer = (state = { items: {}, seq: [] }, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.pet.id]: action.payload
        }
      };
    case ADD_ITEM:
      return {
        items: {
          ...state.items,
          [action.payload.pet.id]: action.payload
        },
        seq: [...state.seq, action.payload.pet.id]
      };
    case REMOVE_ITEM:
      let newState = Object.assign({}, state);
      delete newState.items[action.payload.pet.id];
      let idx = newState.seq.indexOf(action.payload.pet.id);
      newState.seq.splice(idx, 1);
      return newState;
    default:
      return state;
  }
};

export default reducer;