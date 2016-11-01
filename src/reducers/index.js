import { combineReducers } from 'redux';

import countries from './countries';

const rootReducer = combineReducers({
  countries,
});

export default rootReducer;
