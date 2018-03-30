import React from 'react';

import PowerLevelRow from '../components/powerlevels/PowerLevelRow';

describe('PowerLevelRow Component', () => {
  it('should render PowerLevelRow', () => {
    const props = {
      characterData: {
        Name: 'Storm',
        AveragePowerLevel: 9000
      },
      index: 1
    };

    const wrapper = shallow(<PowerLevelRow {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
