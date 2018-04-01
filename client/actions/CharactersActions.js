import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { ENDPOINT, CHARACTER_LIMIT } from '../constants/AppConstants';

const requestCharactersByName = () => {
  return {
    type: types.REQUEST_CHARACTERS_BY_NAME
  };
}

const receiveCharacters = data => {
  return {
    type: types.RECEIVE_CHARACTERS,
    payload: {
      data
    }
  };
}

const receiveError = data => {
  return {
    type: types.RECEIVE_CHARACTERS_ERROR,
    payload: {
      data
    }
  };
}

const createCharacterData = data => {
  const characterData = {};

  characterData.name = data.name;
  characterData.url = (data.urls[1] ? data.urls[1].url : data.urls[0].url);
  characterData.image = data.thumbnail.path + '.' + data.thumbnail.extension;
  characterData.description = (data.description === '' ? 'No description listed for this character.' : characterData.description = data.description);

  return characterData;
}

export const fetchCharactersByName = name => {
  const url = `${ENDPOINT}/characters?limit=${CHARACTER_LIMIT}&name=${name}`;
  const opts = {
    url,
    timeout: 10000,
    method: 'get',
    responseType: 'json'
  };

  return dispatch => {
    dispatch(requestCharactersByName());
    return axios(opts)
      .then(function (response) {
        let data = [];

        if (response.data) {
          data = response.data.results.map(createCharacterData);

          dispatch(receiveCharacters(data));
        }
      })
      .catch(function (response) {
        dispatch(receiveError(response.data));
      });
  };
}
