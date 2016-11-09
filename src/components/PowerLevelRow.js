import React, { Component, PropTypes } from 'react';

export default class PowerLevelRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterData} = this.props;

    return (
      <tr>
        <td>{characterData.Name}</td>
        <td>{characterData.AveragePowerLevel}</td>
        <td>
          <a href={characterData.Profile_Link} target='_blank'>
              <i className='external icon'></i>
          </a>
        </td>
      </tr>
    );
  }
}

PowerLevelRow.propTypes = {
  characterData: PropTypes.object.isRequired
};
