import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { ENDPOINT, KEY, CHARACTER_LIMIT } from '../constants/AppConstants';

function requestCharactersByName() {
  return {
    type: types.REQUEST_CHARACTERS_BY_NAME
  };
}

function receiveCharacters(data) {
  return{
    type: types.RECEIVE_CHARACTERS,
    payload: {
      data
    }
  };
}

function receiveError(data) {
  return {
    type: types.RECEIVE_CHARACTERS_ERROR,
    payload: {
      data
    }
  };
}

function createCharacterData(data) {
  let characterData = {};

  characterData.name = data.name;
  characterData.url = (data.urls[1] ? data.urls[1].url : data.urls[0].url);
  characterData.image = data.thumbnail.path + '.' + data.thumbnail.extension;
  characterData.description =  (data.description === '' ? 'No description listed for this character.' : characterData.description = data.description);

  return characterData;
}

export function fetchCharactersByName(name) {
  const timestamp = new Date().getTime();
  const url = `${ENDPOINT}characters?limit=${CHARACTER_LIMIT}&nameStartsWith=${name}&apikey=${KEY}&ts=${timestamp}`;

  return function(dispatch) {
    dispatch(requestCharactersByName());
    return axios({
      url: url,
      timeout: 10000,
      method: 'get',
      responseType: 'json'
    })
    .then(function(response) {
      let data = [];

      if (response.data) {
        data = response.data.data.results.map(createCharacterData);

        dispatch(receiveCharacters(data));
      }
    })
    .catch(function(response){
      dispatch(receiveError(response.data));
    });
  };
}
