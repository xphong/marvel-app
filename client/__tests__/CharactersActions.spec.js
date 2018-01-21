import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';

import * as types from '../constants/ActionTypes';
import * as CharactersActions from '../actions/CharactersActions';
import * as mocks from './mocks/charactersMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Characters Actions: fetchCharactersByName', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should get characters by name', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mocks.charactersAPIMock
      });
    });

    const expectedResult = [
      { type: types.REQUEST_CHARACTERS_BY_NAME },
      {
        type: types.RECEIVE_CHARACTERS,
        payload: {
          data: mocks.charactersDataMock
        }
      }
    ];

    const store = mockStore({});

    return store.dispatch(CharactersActions.fetchCharactersByName('Venom'))
    .then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should get characters by name snapshot', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mocks.charactersAPIMock
      });
    });

    const store = mockStore({});

    return store.dispatch(CharactersActions.fetchCharactersByName('Venom'))
    .then(() => {
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
