import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { POWER_LEVELS } from '../constants/AppDataPowerLevels';

function requestPowerLevels() {
  return {
    type: types.REQUEST_MARVEL_POWERLEVELS
  };
}

function receivePowerLevels(data) {
  return{
    type: types.RECEIVE_MARVEL_POWERLEVELS,
    payload: {
      data
    }
  };
}

function receivePowerLevelsError(data) {
  return {
    type: types.RECEIVE_MARVEL_POWERLEVELS_ERROR,
    payload: {
      data
    }
  };
}

export function fetchMarvelPowerLevels() {
  return function(dispatch) {
    dispatch(receivePowerLevels(POWER_LEVELS));
  };
}
