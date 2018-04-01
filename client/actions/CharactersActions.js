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

const createCharacter = data => {
  const characterData = {};

  characterData.name = data.name;
  characterData.url = (data.urls[1] ? data.urls[1].url : data.urls[0].url);
  characterData.image = data.thumbnail.path + '.' + data.thumbnail.extension;
  characterData.description = (data.description === '' ? 'No description listed for this character.' : characterData.description = data.description);

  return characterData;
}

const createCharacterMap = data => data.map(createCharacter);

export const fetchCharactersByName = name => {
  const url = `${ENDPOINT}/characters?limit=${CHARACTER_LIMIT}&name=${name}`;
  const opts = {
    url,
    timeout: 10000,
    method: 'get',
    responseType: 'json'
  };

  return async dispatch => {
    dispatch(requestCharactersByName());

    try {
      const { data } = await axios(opts);

      if (data && data.results) {
        const charactersData = createCharacterMap(data.results);
        dispatch(receiveCharacters(charactersData));
      }
    } catch (e) {
      dispatch(receiveError(e));
    }
  };
}
