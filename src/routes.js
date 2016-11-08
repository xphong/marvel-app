import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import MarvelCharacters from './containers/MarvelCharacters';
import About from './containers/About';
import Countries from './containers/Countries';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={MarvelCharacters}/>
    <Route path="about" component={About} />
    <Route path="countries" component={Countries} />
  </Route>
);

export default routes;
