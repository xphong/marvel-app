import React, { Component, PropTypes } from 'react';

import Character from './Character';

export default class CharactersList extends Component {
  constructor(props){
    super(props);
  }

  renderCharacter(character) {
    return <Character key={character.name} character={character} />;
  }

  renderServerError() {
    return (
      <div className='ui message red'>
        Server Error
      </div>
    );
  }

  renderCharactersFound() {
    return (
      <div className='ui message orange'>
        No characters found
      </div>
    );
  }

  render() {
    const {characters} = this.props;

    if (characters.error) {
      return this.renderServerError();
    }

    if (!characters.data.length && characters.isFetched) {
      return this.renderCharactersFound();
    }

    return (
      <div className='ui characters-list cards'>
        {characters.data.map(this.renderCharacter)}
      </div>
    );
  }
}

CharactersList.propTypes = {
  characters: PropTypes.object.isRequired
};
