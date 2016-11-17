import React, { Component, PropTypes } from 'react';

import CharacterPowerLevelInfoDisplay from '../components/characterpowerlevels/CharacterPowerLevelInfoDisplay';
import CharacterPowerLevelRadarChart from '../components/characterpowerlevels/CharacterPowerLevelRadarChart';

export default class CharacterPowerLevelInfo extends Component {
  constructor(props){
    super(props);
  }

  getCharacterChartData(character) {
    const labels = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Energy Projection', 'Fighting Ability'];
    const label = 'Character Data Set';
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
        <CharacterPowerLevelRadarChart characterChartData={characterChartData} />
      </div>
    );
  }
}

CharacterPowerLevelInfo.propTypes = {
  powerLevels: PropTypes.object.isRequired
};
