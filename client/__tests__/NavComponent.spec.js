import React from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/ui/Nav';

describe('Nav Component', () => {
  it('should render Nav', () => {
    const wrapper = shallow(
      <Nav />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
