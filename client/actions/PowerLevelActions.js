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

function calculatePowerLevel(character) {
  const numberOfSkills = 6;

  return ((parseInt(character.Intelligence)
    + parseInt(character.Strength)
    + parseInt(character.Speed)
    + parseInt(character.Durability)
    + parseInt(character.Energy_Projection)
    + parseInt(character.Fighting_Ability)) / numberOfSkills).toFixed(2);
}

function createPowerLevelData(powerlevel) {
  powerlevel.AveragePowerLevel = calculatePowerLevel(powerlevel);
  return powerlevel;
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
  const opts = {
    url: `${ENDPOINT}/powerlevels`,
    timeout: 10000,
    method: 'get',
    responseType: 'json'
  };

  return dispatch => {
    dispatch(requestPowerLevels());

    const powerLevelsSessionData = sessionStorage.getItem('powerlevels-data');

    if (powerLevelsSessionData) {
      return dispatch(receivePowerLevels(JSON.parse(powerLevelsSessionData)));
    }

    return axios(opts)
      .then(response => {
        if (response.data && response.data.length) {
          let powerLevelsData = response.data;
          powerLevelsData.map(createPowerLevelData);
          powerLevelsData = sortCharactersByName(response.data);

          sessionStorage.setItem('powerlevels-data', JSON.stringify(powerLevelsData));

          return dispatch(receivePowerLevels(powerLevelsData));
        }
      })
      .catch(response => dispatch(receivePowerLevelsError(response.data)));
  };
}
