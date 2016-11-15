import React, { Component, PropTypes } from 'react';

import Character from './Character';

export default class CharactersList extends Component {
  constructor(props){
    super(props);
  }

  renderCharacter(character) {
    return <Character key={character.name} character={character} />;
  }

  render() {
    const {data} = this.props.characters;

    return (
      <div className='ui characters-list cards'>
        {data.map(this.renderCharacter)}
      </div>
    );
  }
}

CharactersList.propTypes = {
  characters: PropTypes.object.isRequired
};
