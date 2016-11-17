import React, { Component, PropTypes } from 'react';

import PowerLevelRow from './PowerLevelRow';

export default class PowerLevelList extends Component {
  constructor(props){
    super(props);
  }

  renderPowerLevelRow(characterData, index) {
    return <PowerLevelRow key={characterData.Name} characterData={characterData} index={index} />;
  }

  render() {
    const {data} = this.props.powerLevels;

    return (
      <table className='ui table'>
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Average Power Level</th>
            <th>More Info Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map(this.renderPowerLevelRow)}
        </tbody>
      </table>
    );
  }
}

PowerLevelList.propTypes = {
  powerLevels: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
