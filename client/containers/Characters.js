import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CharactersActions from '../actions/CharactersActions';
import SearchCharacterForm from '../components/characters/SearchCharacterForm';
import CharactersList from '../components/characters/CharactersList';
import WithLoading from '../components/helpers/WithLoading';

const CharactersListWithLoading = WithLoading(CharactersList);

export class Characters extends Component {
  componentDidMount() {
    if (this.props.params.name && this.props.params.name !== '') {
      this.props.actions.fetchCharactersByName(this.props.params.name);
    }
  }

  render() {
    const { characters, actions } = this.props;

    return <div>
        <SearchCharacterForm actions={actions} />
        <CharactersListWithLoading isLoading={characters.isLoading} characters={characters} />
      </div>;
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
