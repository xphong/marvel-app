import React from 'react';
import ReactDOM from 'react-dom';

import CharacterPowerLevelInfo from '../containers/CharacterPowerLevelInfo';

function setup({ isLoading = false, id = 0 } = {}) {
  const props = {
    actions: {
      fetchPowerLevels: jest.fn()
    },
    powerLevels: {
      isLoading,
      data: [
        {
          Name: 'Ant-Man (Hank Pym)',
          Profile_Link: 'http://marvel.wikia.com/Henry_Pym_(Earth-616)',
          Image_Link: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/53176aa9df48d.jpg',
          Intelligence: '6',
          Strength: '7',
          Speed: '3',
          Durability: '3',
          Energy_Projection: '6',
          Fighting_Ability: '3'
        }
      ]
    },
    id
  };

  const wrapper = shallow(<CharacterPowerLevelInfo {...props} />);

  return {
    props,
    wrapper
  };
}

describe('CharacterPowerLevelInfo Container', () => {
  it('should render CharacterPowerLevelInfo', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
