import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { POWER_LEVELS } from '../constants/AppDataPowerLevels';

function requestPowerLevels() {
  return {
    type: types.REQUEST_POWERLEVELS
  };
}

function receivePowerLevels(data) {
  return{
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

function createPowerLevelData(powerLevelKey) {
  let powerLevelData = POWER_LEVELS[powerLevelKey];
  powerLevelData.Name = powerLevelKey;
  powerLevelData.AveragePowerLevel = calculatePowerLevel(powerLevelData);
  return powerLevelData;
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

export function fetchPowerLevels() {
  return function(dispatch) {
    let powerLevelsData = Object.keys(POWER_LEVELS).map(createPowerLevelData);

    dispatch(receivePowerLevels(powerLevelsData));
  };
}