import React, { Component, PropTypes } from 'react';

import CharacterPowerLevelInfoDisplay from '../components/characterpowerlevels/CharacterPowerLevelInfoDisplay';
import CharacterPowerLevelRadarChart from '../components/characterpowerlevels/CharacterPowerLevelRadarChart';
import CharacterPowerLevelBarChart from '../components/characterpowerlevels/CharacterPowerLevelBarChart';

export default class CharacterPowerLevelInfo extends Component {
  constructor(props){
    super(props);
  }

  getCharacterChartData(character) {
    const labels = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Energy Projection', 'Fighting Ability'];
    const label = 'Character Data Set';
    const backgroundColor = [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ];
    let characterChartData = {};
    let data = [];

    data.push(character.Intelligence);
    data.push(character.Strength);
    data.push(character.Speed);
    data.push(character.Durability);
    data.push(character.Energy_Projection);
    data.push(character.Fighting_Ability);

    characterChartData = {
      labels,
      datasets: [
        {
          label,
          backgroundColor,
          data
        }
      ]
    };

    return characterChartData;
  }

  render() {
    const {data} = this.props.powerLevels;
    const {id} = this.props;
    const character = data[id];

    if (!character) {
      return null;
    }

    const characterChartData = this.getCharacterChartData(character);

    return (
      <div className='ui container center aligned'>
        <CharacterPowerLevelInfoDisplay character={character} />
        <div className='chart-area'>
          <CharacterPowerLevelRadarChart characterChartData={characterChartData} />
          <CharacterPowerLevelBarChart characterChartData={characterChartData} />
        </div>
      </div>
    );
  }
}

CharacterPowerLevelInfo.propTypes = {
  powerLevels: PropTypes.object.isRequired
};
