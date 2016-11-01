import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false
};

export default function countriesReducer(state = INITIAL_STATE, action = null) {
  switch(action.type) {
    case types.RECEIVE_ERROR:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: true});
    case types.RECEIVE_COUNTRIES:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: false });
    case types.REQUEST_COUNTRIES:
      return Object.assign({}, state, {isLoading: true, error: false });
    default:
      return state;
  }
}
