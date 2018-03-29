import React from 'react';
import ReactDOM from 'react-dom';

import CharactersList from '../components/characters/CharactersList';

describe('CharactersList Component', () => {
  it('should render CharactersList', () => {
    const props = {
      characters: {
          data: [
              {
                name: 'Hawkeye',
                description: 'poop'
              }
          ]
      }
    };

    const wrapper = shallow(<CharactersList {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
