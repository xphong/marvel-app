import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/main.scss';

import { configureStore } from './store/configureStore';
import App from './containers/App';
import About from './containers/About';
import Countries from './containers/Countries';
import DevTools from './containers/DevTools';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Route path='/' component={App}>
    <Route path="about" component={About} />
    <Route path="countries" component={Countries} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
      {process.env.NODE_ENV === 'development' ? <DevTools /> : ''}
    </div>
  </Provider>,
  document.getElementById('root')
);
