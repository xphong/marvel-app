import React from 'react';

const WithChart = Component => ({ width = 350, height = 350, chartOptions, ...props}) => {
  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    ...chartOptions
  };

  return <Component width={width} height={height} options={options} {...props} />;
};

export default WithChart;
