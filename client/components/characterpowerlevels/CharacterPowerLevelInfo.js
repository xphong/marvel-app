import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Character from '../characters/Character';
import CharacterPowerLevelRadarChart from '../characterpowerlevels/CharacterPowerLevelRadarChart';
import CharacterPowerLevelBarChart from '../characterpowerlevels/CharacterPowerLevelBarChart';

export default class CharacterPowerLevelInfo extends Component {
  getCharacterChartData(character) {
    const labels = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Energy Projection', 'Fighting Ability'];
    const label = 'Character Data Set';
    const backgroundColor = ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'];
    const data = [
      character.Intelligence,
      character.Strength,
      character.Speed,
      character.Durability,
      character.Energy_Projection,
      character.Fighting_Ability
    ];

    const characterChartData = {
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
    const { data } = this.props.powerLevels;
    const { id } = this.props;
    const character = data[id];

    if (!character) return null;

    const characterChartData = this.getCharacterChartData(character);

    return (
      <div className="ui container center aligned">
        <Character character={character} />
        <div className="chart-area">
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
