import React from 'react';

import CharacterPowerLevelRadarChart from '../components/characterpowerlevels/CharacterPowerLevelRadarChart';

describe('CharacterPowerLevelRadarChart Component', () => {
  it('should render CharacterPowerLevelRadarChart', () => {
    const props = {
      characterChartData: {
        label: 'Radar chart of awesomeness'
      }
    };

    const wrapper = shallow(<CharacterPowerLevelRadarChart {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
