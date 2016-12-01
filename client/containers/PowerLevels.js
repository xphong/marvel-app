import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../components/ui/Spinner';
import * as PowerLevelActions from '../actions/PowerLevelActions';
import PowerLevelList from '../components/powerlevels/PowerLevelList';

class PowerLevels extends Component {
  componentDidMount() {
    this.props.actions.fetchPowerLevels();
  }

  render() {
    const {powerLevels, actions} = this.props;    
    
    return (
      <div className='fadeIn-page-animation'>
        {powerLevels.isLoading ? <Spinner /> : <PowerLevelList powerLevels={powerLevels} actions={actions} />}
      </div>
    );
  }
}

PowerLevels.propTypes = {
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
)(PowerLevels);
