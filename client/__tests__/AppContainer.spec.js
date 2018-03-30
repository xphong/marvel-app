import React from 'react';

import App from '../containers/App';

describe('App Container', () => {
  it('should render App', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
