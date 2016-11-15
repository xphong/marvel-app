import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CharactersActions from '../actions/CharactersActions';
import Spinner from '../components/Templates/Spinner';
import SearchCharacterForm from '../components/Characters/SearchCharacterForm';
import CharactersList from '../components/Characters/CharactersList';

class Characters extends Component {
  render() {
    const {characters, actions} = this.props;
    
    return (
      <div>
        <SearchCharacterForm actions={actions} />
        {characters.isLoading ? <Spinner /> : <CharactersList characters={characters} />}
      </div>
    );
  }
}

Characters.propTypes = {
  characters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CharactersActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
