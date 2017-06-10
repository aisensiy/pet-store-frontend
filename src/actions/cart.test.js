import * as actions from './cart';
import petItem from '../fixtures/PetItem';

describe('login actions', () => {

  it('should add one pet to cart', () => {
    const expectedActions = { type: 'ADD_ITEM', payload: { pet: petItem, quantity: 1 } };

    expect(actions.addItem(petItem)).toEqual(expectedActions);

  });
});
