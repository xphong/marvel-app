import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { ENDPOINT } from '../constants/AppConstants';

function requestPowerLevels() {
  return {
    type: types.REQUEST_POWERLEVELS
  };
}

function receivePowerLevels(data) {
  return {
    type: types.RECEIVE_POWERLEVELS,
    payload: {
      data
    }
  };
}

function receivePowerLevelsError(data) {
  return {
    type: types.RECEIVE_POWERLEVELS_ERROR,
    payload: {
      data
    }
  };
}

function createPowerLevelData(powerlevel) {
  powerlevel.AveragePowerLevel = calculatePowerLevel(powerlevel);
  return powerlevel;
}

function calculatePowerLevel(character) {
  const numberOfSkills = 6;

  return ((parseInt(character.Intelligence)
    + parseInt(character.Strength)
    + parseInt(character.Speed)
    + parseInt(character.Durability)
    + parseInt(character.Energy_Projection)
    + parseInt(character.Fighting_Ability)) / numberOfSkills).toFixed(2);
}

function sortCharactersByName(data) {
  var sortedData = data.slice(0);

  sortedData.sort((a, b) => {
    var textA = a.Name.toUpperCase();
    var textB = b.Name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });

  return sortedData;
}

export function fetchPowerLevels() {
  const url = `${ENDPOINT}/powerlevels`;
  const opts = {
    url: url,
    timeout: 10000,
    method: 'get',
    responseType: 'json'
  };

  return dispatch => {
    const powerLevelsSessionData = sessionStorage.getItem('powerlevels-data');

    dispatch(requestPowerLevels());

    if (powerLevelsSessionData) {
      return dispatch(receivePowerLevels(JSON.parse(powerLevelsSessionData)));
    }

    return axios(opts)
      .then(function(response) {
        let powerLevelsData = [];

        if (response.data) {
          powerLevelsData = response.data;
          powerLevelsData.map(createPowerLevelData);
          powerLevelsData = sortCharactersByName(response.data);

          sessionStorage.setItem('powerlevels-data', JSON.stringify(powerLevelsData));

          dispatch(receivePowerLevels(powerLevelsData));
        }
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
      });
  };
}
