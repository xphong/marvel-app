import * as types from '../constants/ActionTypes';

const INITIAL_STATE = {
  isLoading: false,
  data: [],
  error: false,
  isFetched: false
};

export default function charactersReducer(state = INITIAL_STATE, action = null) {
  switch(action.type) {
    case types.RECEIVE_CHARACTERS_ERROR:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: true});
    case types.RECEIVE_CHARACTERS:
      return Object.assign({}, state, {isLoading: false, data: action.payload.data, error: false, isFetched: true });
    case types.REQUEST_CHARACTERS_BY_NAME:
      return Object.assign({}, state, {isLoading: true, error: false });
    default:
      return state;
  }
}
