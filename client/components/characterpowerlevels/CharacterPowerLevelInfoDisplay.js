import React, { Component, PropTypes } from 'react';

export default class CharacterPowerLevelInfoDisplay extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {character} = this.props;

    return (
      <div>
        <h1>{character.Name}</h1>
        <h4>Average Power Level: {character.AveragePowerLevel}</h4>
        <a target='_blank' href={character.Profile_Link}>
          <img className='powerlevel-image fadeIn-animation' src={character.Image_Link} />
        </a>
      </div>
    );
  }
}

CharacterPowerLevelInfoDisplay.propTypes = {
  character: PropTypes.object.isRequired
};
