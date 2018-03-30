import React from 'react';

import Spinner from '../components/ui/Spinner';

describe('Spinner Component', () => {
  it('should render Spinner', () => {
    const wrapper = shallow(
      <Spinner />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
