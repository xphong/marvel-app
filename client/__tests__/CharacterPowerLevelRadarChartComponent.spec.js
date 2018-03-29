import React from 'react';
import ReactDOM from 'react-dom';

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
