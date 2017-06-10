import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as actions from './pets';
import defaultPetItem from '../fixtures/PetItem';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('load pets', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  const responseBody = {
    _embedded: {
      pets: [
        defaultPetItem
      ]
    }
  };

  const expectedPayload = [
    defaultPetItem
  ];

  it('should load pets success', () => {
    nock('http://example.com')
        .get(`/pets`)
        .reply(200, responseBody);

    const expectedActions = [
      {type: 'PETS_REQUEST'},
      {type: 'PETS_REQUEST_SUCCESS'},
      {type: 'LOAD_PETS', payload: expectedPayload}
    ];

    const store = mockStore({});
    return store.dispatch(actions.loadPets()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to load pets', () => {
    nock('http://example.com')
        .get(`/pets?category=1`)
        .reply(500, {});

    const expectedActions = [
      {type: 'PETS_REQUEST'},
      {type: 'PETS_REQUEST_FAIL', payload: {}}
    ];

    const store = mockStore({});
    return store.dispatch(actions.loadPets()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    }).catch(() => {
    });
  })
});