import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Bar as BarChart } from 'react-chartjs-2';

export default class CharacterPowerLevelBarChart extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterChartData} = this.props;

    return (
      <div>
        <BarChart
          className='chart'
          data={characterChartData}
          width={350}
          height={350}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            }
          }}
        />
      </div>
    );
  }
}

CharacterPowerLevelBarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};
