import React from 'react';
import ReactDOM from 'react-dom';

import { PowerLevels } from '../containers/PowerLevels';

function setup({ isLoading = false } = {}) {
  const props = {
    actions: {
      fetchPowerLevels: jest.fn()
    },
    powerLevels: {
      isLoading
    }
  };

  const wrapper = shallow(<PowerLevels {...props} />);

  return {
    props,
    wrapper
  };
}

describe('PowerLevels Container', () => {
  it('should render PowerLevels', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render PowerLevels with loading spinner', () => {
    const { wrapper } = setup({
      isLoading: true
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchPowerLevels', () => {
    const { props } = setup();

    expect(props.actions.fetchPowerLevels).toHaveBeenCalled();
  });
});
