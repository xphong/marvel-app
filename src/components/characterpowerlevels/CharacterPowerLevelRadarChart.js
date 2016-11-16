import React, { Component, PropTypes } from 'react';

import { Radar as RadarChart } from 'react-chartjs';

export default class CharacterPowerLevelRadarChart extends Component {
  constructor(props){
    super(props);
  }

  getCharacterChartData(character) {
    return {
      labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
      datasets: [
        {
          label: "Character Data Set",
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };
  }

  render() {
    const {character} = this.props;
    const characterChartData = this.getCharacterChartData(character);

    return (
        <RadarChart data={characterChartData} width='600' height='400'/>
    );
  }
}

CharacterPowerLevelRadarChart.propTypes = {
  character: PropTypes.object.isRequired
};
