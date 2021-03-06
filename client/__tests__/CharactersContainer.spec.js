import React from 'react';

import { Characters } from '../containers/Characters';

function setup({ isLoading = false, name = '' } = {}) {
  const props = {
    actions: {
      fetchCharactersByName: jest.fn()
    },
    characters: {
      isLoading
    },
    params: {
      name
    }
  };

  const wrapper = shallow(<Characters {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Characters Container', () => {
  it('should render Characters', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Characters with loading spinner', () => {
    const { wrapper } = setup({
      isLoading: true
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchCharactersByName', () => {
    const name = 'Wolverine';

    const { props } = setup({
      name
    });

    expect(props.actions.fetchCharactersByName).toHaveBeenCalledWith(name);
  });
});
