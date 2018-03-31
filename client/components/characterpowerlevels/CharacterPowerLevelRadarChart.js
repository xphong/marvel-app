import React from 'react';
import PropTypes from 'prop-types';

import { Radar } from 'react-chartjs-2';
import WithChart from '../hocs/WithChart';

const RadarChart = WithChart(Radar);

export const CharacterPowerLevelRadarChart = props => {
  const { characterChartData } = props;

  const chartOptions = {
    scale: {
      ticks: {
        maxTicksLimit: 3,
        display: false
      }
    }
  };

  return (
    <div>
      <RadarChart data={characterChartData} chartOptions={chartOptions} />
    </div>
  );
};

CharacterPowerLevelRadarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};

export default CharacterPowerLevelRadarChart;
