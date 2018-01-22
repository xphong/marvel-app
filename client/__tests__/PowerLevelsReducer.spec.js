import * as types from '../constants/ActionTypes';
import powerlevelsReducer from '../reducers/powerLevels';

describe('Power Levels Reducer', () => {
  it('should return initial state', () => {
    const reducer = powerlevelsReducer(undefined, {});

    expect(reducer).toMatchSnapshot();
  });

  it('should handle RECEIVE_POWERLEVELS_ERROR', () => {
    const action = {
      type: types.RECEIVE_POWERLEVELS_ERROR,
      payload: {
        data: []
      }
    };

    const reducer = powerlevelsReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle RECEIVE_POWERLEVELS', () => {
    const action = {
      type: types.RECEIVE_POWERLEVELS,
      payload: {
        data: [{
          name: 'Spider-man'
        }]
      }
    };

    const reducer = powerlevelsReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });

  it('should handle REQUEST_POWERLEVELS', () => {
    const action = {
      type: types.REQUEST_POWERLEVELS
    };

    const reducer = powerlevelsReducer(undefined, action);

    expect(reducer).toMatchSnapshot();
  });
});
