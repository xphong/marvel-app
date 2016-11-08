import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MarvelCharacterActions from '../actions/MarvelCharactersActions';
import Spinner from '../components/Spinner';
import MarvelSearchCharacterForm from '../components/MarvelSearchCharacterForm';

class MarvelCharacters extends Component {
  render() {
    const {marvelCharacters, actions} = this.props;
    
    return (
      <div>
        <MarvelSearchCharacterForm actions={actions} />
        {marvelCharacters.isLoading ? <Spinner /> : ''}
      </div>
    );
  }
}

MarvelCharacters.propTypes = {
  marvelCharacters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    marvelCharacters: state.marvelCharacters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MarvelCharacterActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarvelCharacters);
