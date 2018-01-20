import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App';

describe('App', () => {
  it('should render App', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
