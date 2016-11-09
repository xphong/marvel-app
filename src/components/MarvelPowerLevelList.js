import React, { Component, PropTypes } from 'react';

import MarvelPowerLevelRow from './MarvelPowerLevelRow';

export default class MarvelPowerLevelList extends Component {
  constructor(props){
    super(props);
  }

  renderPowerLevelRow(powerLevelKey) {
    const {data} = this.props.marvelPowerLevels;

    return <MarvelPowerLevelRow key={powerLevelKey} powerlevel={data[powerLevelKey]} />;
  }

  render() {
    const {data} = this.props.marvelPowerLevels;

    return (
      <table className='ui table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Power Level</th>
            <th>Profile Link</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map(this.renderPowerLevelRow.bind(this))}
        </tbody>
      </table>
    );
  }
}

MarvelPowerLevelList.propTypes = {
  marvelPowerLevels: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
