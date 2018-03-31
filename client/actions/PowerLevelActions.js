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

  return ((parseInt(character.Intelligence, 10)
    + parseInt(character.Strength, 10)
    + parseInt(character.Speed, 10)
    + parseInt(character.Durability, 10)
    + parseInt(character.Energy_Projection, 10)
    + parseInt(character.Fighting_Ability, 10)) / numberOfSkills).toFixed(2);
}

function createCharacterData(data) {
  const characterData = {
    ...data
  };

  characterData.averagePowerLevel = calculatePowerLevel(data);
  characterData.name = data.Name;
  characterData.url = data.Profile_Link;
  characterData.image = data.Image_Link;

  return characterData;
}

function sortCharactersByName(data) {
  const sortedData = data.slice(0);

  sortedData.sort((a, b) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
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
        const { data } = response;

        if (data && data.length) {
          const powerLevelsData = sortCharactersByName(data.map(createCharacterData));

          sessionStorage.setItem('powerlevels-data', JSON.stringify(powerLevelsData));

          return dispatch(receivePowerLevels(powerLevelsData));
        }
      })
      .catch(response => dispatch(receivePowerLevelsError(response.data)));
  };
}
