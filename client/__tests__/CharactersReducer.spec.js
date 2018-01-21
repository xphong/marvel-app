import * as types from '../constants/ActionTypes';
import charactersReducer from '../reducers/characters';

describe('Characters Reducer', () => {
  it('should return initial state', () => {
    const reducer = charactersReducer(undefined, {});

    expect(reducer).toMatchSnapshot();
  });

  it('should handle RECEIVE_CHARACTERS_ERROR', () => {
    const action = {
      type: types.RECEIVE_CHARACTERS_ERROR,
      payload: {
        data: []
      }
    };

    const reducer = charactersReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle RECEIVE_CHARACTERS', () => {
    const action = {
      type: types.RECEIVE_CHARACTERS,
      payload: {
        data: [{
          name: 'Spider-man'
        }]
      }
    };

    const reducer = charactersReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle REQUEST_CHARACTERS_BY_NAME', () => {
    const action = {
      type: types.REQUEST_CHARACTERS_BY_NAME
    };

    const reducer = charactersReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });
});
