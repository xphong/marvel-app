import React, { Component, PropTypes } from 'react';

import { Bar as BarChart } from 'react-chartjs';

export default class CharacterPowerLevelBarChart extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterChartData} = this.props;

    return (
      <BarChart className='chart' data={characterChartData} width='350' height='350'/>
    );
  }
}

CharacterPowerLevelBarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};
