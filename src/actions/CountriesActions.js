import axios from 'axios';

import * as types from '../constants/ActionTypes';

function requestCountries() {
  return {
    type: types.REQUEST_COUNTRIES
  };
}

function receiveCountries(data) {
  return{
    type: types.RECEIVE_COUNTRIES,
    payload: {
      data
    }
  };
}

function receiveError(data) {
  return {
    type: types.RECEIVE_ERROR,
    payload: {
      data
    }
  };
}

export function fetchCountries(url) {
  return function(dispatch) {
    dispatch(requestCountries());
    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
    .then(function(response) {
      dispatch(receiveCountries(response.data));
    })
    .catch(function(response){
      dispatch(receiveError(response.data));
    });
  };
}
