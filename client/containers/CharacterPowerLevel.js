import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/ui/Spinner';
import * as PowerLevelActions from '../actions/PowerLevelActions';
import CharacterPowerLevelInfo from './CharacterPowerLevelInfo';

class CharacterPowerLevel extends Component {
  componentDidMount() {
    if (!this.props.powerLevels.data.length) {
      this.props.actions.fetchPowerLevels();
    }
  }

  render() {
    const {powerLevels, params} = this.props;

    return (
      <div>
        {powerLevels.isLoading ? <Spinner /> : <CharacterPowerLevelInfo id={params.id} powerLevels={powerLevels} />}
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
