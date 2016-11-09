import React, { Component, PropTypes } from 'react';

export default class MarvelPowerLevelRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterName, powerlevel} = this.props;

    return (
      <tr>
        <td>{characterName}</td>
        <td>{powerlevel.Intelligence}</td>
        <td>{powerlevel.Intelligence}</td>
      </tr>
    );
  }
}

MarvelPowerLevelRow.propTypes = {
  characterName: PropTypes.string.isRequired,
  powerlevel: PropTypes.object.isRequired
};
