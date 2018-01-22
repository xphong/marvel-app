import React from 'react';
import ReactDOM from 'react-dom';

import About from '../containers/About';

describe('About Container', () => {
  it('should render About', () => {
    const wrapper = shallow(
      <About />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
