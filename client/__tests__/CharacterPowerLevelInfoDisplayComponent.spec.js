import React from 'react';

import CharacterPowerLevelInfoDisplay from '../components/characterpowerlevels/CharacterPowerLevelInfoDisplay';

describe('CharacterPowerLevelInfoDisplay Component', () => {
  it('should render CharacterPowerLevelInfoDisplay', () => {
    const props = {
      character: {
        Name: 'Rogue',
        AveragePowerLevel: '9001'
      }
    };

    const wrapper = shallow(<CharacterPowerLevelInfoDisplay {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
