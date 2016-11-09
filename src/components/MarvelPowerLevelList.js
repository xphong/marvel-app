import React, { Component, PropTypes } from 'react';

import MarvelPowerLevelRow from './MarvelPowerLevelRow';

export default class MarvelPowerLevelList extends Component {
  constructor(props){
    super(props);
  }

  renderPowerLevelRow(characterData) {
    return <MarvelPowerLevelRow key={characterData.Name} characterData={characterData} />;
  }

  render() {
    const {data} = this.props.marvelPowerLevels;

    return (
      <table className='ui table'>
        <thead>
          <tr>
            <th>Character Name</th>
            <th>Average Power Level</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map(this.renderPowerLevelRow)}
        </tbody>
      </table>
    );
  }
}

MarvelPowerLevelList.propTypes = {
  marvelPowerLevels: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
