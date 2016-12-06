import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import Characters from './containers/Characters';
import About from './containers/About';
import PowerLevels from './containers/PowerLevels';
import CharacterPowerLevel from './containers/CharacterPowerLevel';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Characters}/>
    <Route path='about' component={About} />
    <Route path='powerlevels' component={PowerLevels} />
    <Route path='powerlevels/:id' component={CharacterPowerLevel} />
    <Route path='characters/:name' component={Characters} />
  </Route>
);

export default routes;
