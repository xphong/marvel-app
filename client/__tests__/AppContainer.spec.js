import React from 'react';
import ReactDOM from 'react-dom';

import App from '../containers/App';

describe('App Container', () => {
  it('should render App', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
