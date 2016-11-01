import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.scss';

import { configureStore } from './store/configureStore';
import App from './containers/App';
import DevTools from './containers/DevTools';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {process.env.NODE_ENV === 'development' ? <DevTools /> : ''}
    </div>
  </Provider>,
  document.getElementById('root')
);
