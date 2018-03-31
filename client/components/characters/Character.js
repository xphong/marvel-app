import PropTypes from 'prop-types';
import React from 'react';

export const Character = props => {
  const { character } = props;

  return <div className="ui centered card fadeIn-animation">
      <div className="image">
        <img src={character.image} alt={"Image of " + character.name} />
      </div>
      <div className="content">
        <div className="header">{character.name}</div>
        <div className="description">{character.description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <a target="_blank" href={character.url}>
            <button className="ui icon purple tiny button">More Info</button>
          </a>
        </span>
        {character.averagePowerLevel ?
          <span className="left floated">
            <i className="fire icon" />
            {character.averagePowerLevel}
          </span> : ""}
      </div>
    </div>;
};

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
