import React from 'react';
import ReactDOM from 'react-dom';

import { CharacterPowerLevel } from '../containers/CharacterPowerLevel';

function setup({ isLoading = false, id = 1 } = {}) {
  const props = {
    actions: {
      fetchPowerLevels: jest.fn()
    },
    powerLevels: {
      isLoading,
      data: []
    },
    params: {
      id
    }
  };

  const wrapper = shallow(<CharacterPowerLevel {...props} />);

  return {
    props,
    wrapper
  };
}

describe('CharacterPowerLevel Container', () => {
  it('should render CharacterPowerLevel', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render CharacterPowerLevel with loading spinner', () => {
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
