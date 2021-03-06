import React from 'react';

import CharacterPowerLevelBarChart from '../components/characterpowerlevels/CharacterPowerLevelBarChart';

describe('CharacterPowerLevelBarChart Component', () => {
  it('should render CharacterPowerLevelBarChart', () => {
    const props = {
      characterChartData: {
        label: 'Character data set'
      }
    };

    const wrapper = shallow(<CharacterPowerLevelBarChart {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
