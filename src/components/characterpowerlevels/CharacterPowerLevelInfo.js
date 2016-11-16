import React, { Component, PropTypes } from 'react';

import CharacterPowerLevelRadarChart from './CharacterPowerLevelRadarChart';

export default class CharacterPowerLevelInfo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {data} = this.props.powerLevels;
    const {id} = this.props;
    const currentCharacter = data[id];

    if (!currentCharacter) {
      return null;
    }

    return (
      <div>
        <h1>{currentCharacter.Name}</h1>
        <a target='_blank' href={currentCharacter.Profile_Link}>
          <img className='ui medium image transition' src={currentCharacter.Image_Link} />
        </a>
        <h4>Average Power Level: {currentCharacter.AveragePowerLevel}</h4>
        <CharacterPowerLevelRadarChart character={currentCharacter} />
      </div>
    );
  }
}

CharacterPowerLevelInfo.propTypes = {
  powerLevels: PropTypes.object.isRequired
};
