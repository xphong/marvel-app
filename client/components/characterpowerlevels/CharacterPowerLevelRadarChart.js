import React from 'react';
import PropTypes from 'prop-types';

import { Radar as RadarChart } from 'react-chartjs-2';
import WithChart from '../helpers/WithChart';

const RadarChartWithDefaults = WithChart(RadarChart);

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
      <RadarChartWithDefaults data={characterChartData} chartOptions={chartOptions} />
    </div>
  );
};

CharacterPowerLevelRadarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};

export default CharacterPowerLevelRadarChart;
