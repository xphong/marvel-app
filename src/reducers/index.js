import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import marvelPowerLevels from './marvelPowerLevels';
import marvelCharacters from './marvelCharacters';

const rootReducer = combineReducers({
  marvelPowerLevels,
  marvelCharacters,
  routing: routerReducer
});

export default rootReducer;
