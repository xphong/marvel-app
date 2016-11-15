import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PowerLevelRow extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {characterData, index} = this.props;

    return (
      <tr>
        <td>
          <Link to={`/powerlevels/${index}`}>
            {characterData.Name}
          </Link>
        </td>
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
  characterData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};
