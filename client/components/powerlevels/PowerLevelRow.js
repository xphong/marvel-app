import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

export const PowerLevelRow = props => {
  const { characterData, index } = props;

  return (
    <tr>
      <td>
        <Link to={`/powerlevels/${index}`}>
          {characterData.Name}
        </Link>
      </td>
      <td>{characterData.averagePowerLevel}</td>
      <td>
        <a href={characterData.Profile_Link} target="_blank">
            <i className="external icon" />
        </a>
      </td>
    </tr>
  );
};

PowerLevelRow.propTypes = {
  characterData: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export default PowerLevelRow;
