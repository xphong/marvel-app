import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import countries from './countries';
import marvelCharacters from './marvelCharacters';

const rootReducer = combineReducers({
  countries,
  marvelCharacters,
  routing: routerReducer
});

export default rootReducer;
