import storage from '../utils/storage';

export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CART_LOADED = 'CART_LOADED';
export const CLEAR_CART = 'CLEAR_CART';

const reducer = (state = { items: {}, seq: [] }, action) => {
  let newState;
  switch (action.type) {
    case CLEAR_CART:
      newState = { items: {}, seq: [] };
      storage.setItem('cart', JSON.stringify(newState));
      break;
    case CART_LOADED:
      newState = action.payload;
      break;
    case UPDATE_QUANTITY:
      newState = {
        ...state,
        items: {
          ...state.items,
          [action.payload.pet.id]: action.payload
        }
      };
      storage.setItem('cart', JSON.stringify(newState));
      break;
    case ADD_ITEM:
      let { pet } = action.payload;
      if (!state.items[pet.id]) {
        newState = {
          items: {
            ...state.items,
            [action.payload.pet.id]: action.payload
          },
          seq: [...state.seq, action.payload.pet.id]
        };
        storage.setItem('cart', JSON.stringify(newState));
      } else {
        newState = state;
      }
      break;
    case REMOVE_ITEM:
      newState = Object.assign({}, state);
      delete newState.items[action.payload.pet.id];
      let idx = newState.seq.indexOf(action.payload.pet.id);
      newState.seq.splice(idx, 1);
      storage.setItem('cart', JSON.stringify(newState));
      break;
    default:
      newState = state;
  }
  return newState;
};

export const getItems = ({ items, seq }) => {
  return seq.map(id => items[id]);
};

export const getCount = ({ items }) => {
  return Object.values(items).map(item => item.quantity).reduce((total, v) => total += v, 0);
};

export default reducer;