import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Radar as RadarChart } from 'react-chartjs-2';

export default class CharacterPowerLevelRadarChart extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterChartData} = this.props;

    return (
      <div>
        <RadarChart
          className='chart'
          data={characterChartData}
          width={350}
          height={350}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

CharacterPowerLevelRadarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};
