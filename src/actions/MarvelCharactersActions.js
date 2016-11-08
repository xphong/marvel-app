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
      let data = [];

      if (response.data) {
        data = response.data.data.results.map(value => {
          let tempData = {};

          tempData.name = value.name;
          tempData.url = (value.urls[1] ? value.urls[1].url : value.urls[0].url);
          tempData.image = value.thumbnail.path + '.' + value.thumbnail.extension;
          tempData.description =  (value.description === '' ? 'No description listed for this character.' : tempData.description = value.description);

          return tempData;
        });

        dispatch(receiveMarvelCharacters(data));
      }
    })
    .catch(function(response){
      dispatch(receiveError(response.data));
    });
  };
}
