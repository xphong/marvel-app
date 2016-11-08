import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { ENDPOINT, KEY, CHARACTER_LIMIT } from '../constants/AppConstants';

function requestMarvelCharactersByName() {
  return {
    type: types.REQUEST_MARVEL_CHARACTERS_BY_NAME
  };
}

function receiveMarvelCharacters(data) {
  return{
    type: types.RECEIVE_MARVEL_CHARACTERS,
    payload: {
      data
    }
  };
}

function receiveError(data) {
  return {
    type: types.RECEIVE_MARVEL_CHARACTERS_ERROR,
    payload: {
      data
    }
  };
}

export function fetchMarvelCharactersByName(name) {
  const timestamp = new Date().getTime();
  const url = `${ENDPOINT}characters?limit=${CHARACTER_LIMIT}&nameStartsWith=${name}&apikey=${KEY}&ts=${timestamp}`;

  return function(dispatch) {
    dispatch(requestMarvelCharactersByName());
    return axios({
      url: url,
      timeout: 10000,
      method: 'get',
      responseType: 'json'
    })
    .then(function(response) {
      dispatch(receiveMarvelCharacters(response.data.data.results));
    })
    .catch(function(response){
      dispatch(receiveError(response.data));
    });
  };
}
