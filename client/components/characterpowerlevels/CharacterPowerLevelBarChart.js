import React from 'react';
import PropTypes from 'prop-types';

import { Bar } from 'react-chartjs-2';
import WithChart from '../hocs/WithChart';

const BarChart = WithChart(Bar);

export const CharacterPowerLevelBarChart = props => {
  const { characterChartData } = props;

  return (
    <div>
      <BarChart data={characterChartData} />
    </div>
  );
};

CharacterPowerLevelBarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};

export default CharacterPowerLevelBarChart;
