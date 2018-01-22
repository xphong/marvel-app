import React from 'react';
import ReactDOM from 'react-dom';

import Spinner from '../components/ui/Spinner';

describe('Spinner Component', () => {
  it('should render Spinner', () => {
    const wrapper = shallow(
      <Spinner />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
