import React, { Component, PropTypes } from 'react';

import CharacterPowerLevelInfoDisplay from '../components/characterpowerlevels/CharacterPowerLevelInfoDisplay';
import CharacterPowerLevelRadarChart from '../components/characterpowerlevels/CharacterPowerLevelRadarChart';

export default class CharacterPowerLevelInfo extends Component {
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
