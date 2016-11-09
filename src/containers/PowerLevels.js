import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import * as MarvelPowerLevelActions from '../actions/MarvelPowerLevelActions';
import MarvelPowerLevelList from '../components/MarvelPowerLevelList';

class PowerLevels extends Component {
  componentDidMount() {
    this.props.actions.fetchMarvelPowerLevels();
  }

  render() {
    const {marvelPowerLevels, actions} = this.props;
    
    return (
      <div>
        {marvelPowerLevels.isLoading ? <Spinner /> : <MarvelPowerLevelList marvelPowerLevels={marvelPowerLevels} actions={actions} />}
      </div>
    );
  }
}

PowerLevels.propTypes = {
  marvelPowerLevels: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    marvelPowerLevels: state.marvelPowerLevels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MarvelPowerLevelActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PowerLevels);
