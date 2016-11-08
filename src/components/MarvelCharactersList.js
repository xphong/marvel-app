import React, { Component, PropTypes } from 'react';

import MarvelCharacter from './MarvelCharacter';

export default class MarvelCharactersList extends Component {
  constructor(props){
    super(props);
  }

  renderCharacter(character) {
    return <MarvelCharacter key={character.name} character={character} />;
  }

  render() {
    const {data} = this.props.marvelCharacters;

    return (
      <div className='ui characters-list cards'>
        {data.map(this.renderCharacter)}
      </div>
    );
  }
}

MarvelCharactersList.propTypes = {
  marvelCharacters: PropTypes.object.isRequired
};
