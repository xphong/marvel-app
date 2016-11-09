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

function createMarvelCharacterData(data) {
  let marvelCharacterData = {};

  marvelCharacterData.name = data.name;
  marvelCharacterData.url = (data.urls[1] ? data.urls[1].url : data.urls[0].url);
  marvelCharacterData.image = data.thumbnail.path + '.' + data.thumbnail.extension;
  marvelCharacterData.description =  (data.description === '' ? 'No description listed for this character.' : marvelCharacterData.description = data.description);

  return marvelCharacterData;
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
      let data = [];

      if (response.data) {
        data = response.data.data.results.map(createMarvelCharacterData);

        dispatch(receiveMarvelCharacters(data));
      }
    })
    .catch(function(response){
      dispatch(receiveError(response.data));
    });
  };
}
