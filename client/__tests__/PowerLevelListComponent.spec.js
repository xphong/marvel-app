import React from 'react';
import ReactDOM from 'react-dom';

import PowerLevelList from '../components/powerlevels/PowerLevelList';

describe('PowerLevelList Component', () => {
  it('should render PowerLevelList', () => {
    const props = {
      actions: {},
      powerLevels: {
        data: [{
          Name: 'Storm',
          AveragePowerLevel: 9000
        }]
      }
    };

    const wrapper = shallow(<PowerLevelList {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
