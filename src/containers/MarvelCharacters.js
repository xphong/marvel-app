import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import * as MarvelCharacterActions from '../actions/MarvelCharactersActions';

class MarvelCharacters extends Component {
  render() {
    const {characters, actions} = this.props;
    
    return (
      <div>
        
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
