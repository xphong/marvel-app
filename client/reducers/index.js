import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import powerLevels from './powerLevels';
import characters from './characters';

const rootReducer = combineReducers({
  powerLevels,
  characters,
  routing: routerReducer
});

export default rootReducer;
