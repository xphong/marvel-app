import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PowerLevelActions from '../actions/PowerLevelActions';
import PowerLevelList from '../components/powerlevels/PowerLevelList';
import WithLoading from '../components/hocs/WithLoading';

const PowerLevelListWithLoading = WithLoading(PowerLevelList);

export class PowerLevels extends Component {
  componentDidMount() {
    this.props.actions.fetchPowerLevels();
  }

  render() {
    const { powerLevels, actions } = this.props;

    return (
      <div className="fadeIn-page-animation">
        <PowerLevelListWithLoading isLoading={powerLevels.isLoading} powerLevels={powerLevels} actions={actions} />
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
