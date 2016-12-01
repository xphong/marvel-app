import React, { Component, PropTypes } from 'react';

export default class Character extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {character} = this.props;

    return (
      <div className='ui card fadeIn-animation'>
        <div className='image'>
            <img src={character.image} />
        </div>
        <div className='content'>
            <div className='header'>{character.name}</div>
            <div className='description'>
              {character.description}
            </div>
          </div>
          <div className='extra content'>
            <span className='right floated'>
              <a target="_blank" href={character.url}>
                <button className='ui icon purple tiny button'>
                    More Info
                </button>
              </a>
            </span>
          </div>
      </div>
    );
  }
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};
