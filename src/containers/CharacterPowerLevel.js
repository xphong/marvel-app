import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/ui/Spinner';
import * as PowerLevelActions from '../actions/PowerLevelActions';

class CharacterPowerLevel extends Component {
  componentDidMount() {
    if (!this.props.powerLevels.data.length) {
      this.props.actions.fetchPowerLevels();
    }
  }

  getPowerLevelsById(id, powerLevelData) {
    return powerLevelData[id];
  }

  render() {
    const {getPowerLevelsById} = this;
    const {powerLevels, params} = this.props;
    const currentCharacter = getPowerLevelsById(params.id, powerLevels.data);

    return (
      <div>
        COOOOOOOOOL
        {powerLevels.isLoading ? <Spinner /> : ''}
      </div>
    );
  }
}

CharacterPowerLevel.propTypes = {
  powerLevels: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    powerLevels: state.powerLevels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PowerLevelActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterPowerLevel);
