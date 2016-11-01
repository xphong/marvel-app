import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import countries from './countries';

const rootReducer = combineReducers({
  countries,
  routing: routerReducer
});

export default rootReducer;
