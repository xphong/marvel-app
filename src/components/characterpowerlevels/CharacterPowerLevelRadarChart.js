import React, { Component, PropTypes } from 'react';

import { Radar as RadarChart } from 'react-chartjs';

export default class CharacterPowerLevelRadarChart extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterChartData} = this.props;

    return (
      <RadarChart className='chart' data={characterChartData} width='350' height='350'/>
    );
  }
}

CharacterPowerLevelRadarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};
