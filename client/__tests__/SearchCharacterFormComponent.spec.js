import React from 'react';
import { browserHistory } from 'react-router';

import SearchCharacterForm from '../components/characters/SearchCharacterForm';

describe('SearchCharacterForm Component', () => {
  it('should render SearchCharacterForm', () => {
    const wrapper = shallow(
      <SearchCharacterForm />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should perform a search', () => {
    const wrapper = shallow(
      <SearchCharacterForm />
    );

    const value = 'Professor X';

    wrapper.find('input').simulate('change', {
      target: {
        name: 'characterName',
        value
      },
    });

    wrapper.find('button').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleInputChange', () => {
    it('should update characterName state', () => {
      const wrapper = shallow(
        <SearchCharacterForm />
      );

      const value = 'Magneto';

      wrapper.instance().handleInputChange({
        target: {
          name: 'characterName',
          value
        }
      });

      expect(wrapper.state().characterName).toEqual(value);
    });
  });

  describe('handleSearch', () => {
    function handleSearchSetup() {
      const props = {
        actions: {
          fetchCharactersByName: jest.fn()
        }
      };

      const wrapper = shallow(
        <SearchCharacterForm {...props} />
      );

      spyOn(browserHistory, 'push');
      spyOn(wrapper.instance(), 'resetForm');

      wrapper.state().characterName = 'Rogue';
      wrapper.instance().handleSearch({
        preventDefault: jest.fn()
      });

      return {
        props,
        wrapper
      };
    }

    it('should call fetchCharactersByName action', () => {
      const { wrapper, props } = handleSearchSetup();
      expect(props.actions.fetchCharactersByName).toHaveBeenCalledWith(wrapper.state().characterName);
    });

    it('should call browserHistory', () => {
      const { wrapper } = handleSearchSetup();
      expect(browserHistory.push).toHaveBeenCalledWith(`/characters/${wrapper.state().characterName}`);
    });

    it('should call resetForm', () => {
      const { wrapper } = handleSearchSetup();
      expect(wrapper.instance().resetForm).toHaveBeenCalled();
    });
  });
});
