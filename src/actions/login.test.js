import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as actions from './login';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('login actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  let username = 'scxu';
  let password = '123';
  let email = 'scxu@thoughtworks.com';

  it('should login success and get request success action and session created action', () => {
    nock('http://example.com')
        .post('/auth', {
          username,
          password
        })
        .reply(201, {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoic2N4dSIsImVtYWlsIjoic2N4dUB0aG91Z2h0d29ya3MuY29tIn0.DrDy3KHQhtWB-PjgEWVfkyJSrA9fOzIB0UjdNRcv4wo'});

    const expectedActions = [
      { type: 'LOGIN_REQUEST' },
      { type: 'LOGIN_REQUEST_SUCCESS' },
      { type: 'SESSION_CREATED', payload: { username: 'scxu', email } }
    ];

    const store = mockStore({});

    return store.dispatch(actions.login(username, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should login fail and get request fail action', () => {
    nock('http://example.com')
        .post('/auth', {
          auth: {
            email,
            password
          }
        })
        .reply(404, {});

    const expectedActions = [
      { type: 'LOGIN_REQUEST' },
      { type: 'LOGIN_REQUEST_FAIL', payload: {} }
    ];

    const store = mockStore({});

    return store.dispatch(actions.login(username, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    }).catch(() => {});
  });

  it('should reset login request result', () => {
    expect(actions.resetLogin()).toEqual({
      type: 'LOGIN_REQUEST_RESET'
    });
  });
});
