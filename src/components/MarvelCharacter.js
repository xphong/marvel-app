import React, {Component} from 'react';

export default class MarvelCharacter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {character} = this.props;

    return (
      <div className='ui card'>
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
              <a href={character.url}>
                <button className='ui icon orange tiny button'>
                    More Info
                </button>
              </a>
            </span>
          </div>
      </div>
    );
  }
}
