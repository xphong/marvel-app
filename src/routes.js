import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import MarvelCharacters from './containers/MarvelCharacters';
import About from './containers/About';
import PowerLevels from './containers/PowerLevels';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={MarvelCharacters}/>
    <Route path='about' component={About} />
    <Route path='powerlevels' component={PowerLevels} />
  </Route>
);

export default routes;
