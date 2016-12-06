import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CharactersActions from '../actions/CharactersActions';
import Spinner from '../components/ui/Spinner';
import SearchCharacterForm from '../components/characters/SearchCharacterForm';
import CharactersList from '../components/characters/CharactersList';

class Characters extends Component {
  componentDidMount() {
    if (this.props.params.name && this.props.params.name !== '') {
      this.props.actions.fetchCharactersByName(this.props.params.name);
    }
  }

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
