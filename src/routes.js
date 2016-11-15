import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import Characters from './containers/Characters';
import About from './containers/About';
import PowerLevels from './containers/PowerLevels';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Characters}/>
    <Route path='about' component={About} />
    <Route path='powerlevels' component={PowerLevels} />
    <Route path='powerlevels/:id' component={PowerLevels} />
  </Route>
);

export default routes;
