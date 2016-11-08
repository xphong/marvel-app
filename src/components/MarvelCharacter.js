import React, {Component} from 'react';

export default class MarvelCharacter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {character} = this.props;

    return (
      <div>
        <div className='image'>
            <img ng-src='{character.url}'>
        </div>
        <div className='content'>
            <div className='header'>{character.name}</div>
            <div className='meta'>
              <a href='{character.url}' target='_blank'>
                {character.url} 
                <i className='external icon'></i>
              </a>
            </div>
            <div className='description'>
              {character.description}
            </div>
          </div>
          <div className='extra content'>
            <span className='right floated'>
              <a href='{character.url}'>
                <button className='ui icon orange tiny button'>
                    View Content
                </button>
              </a>
            </span>
          </div>
        </div>
    );
  }
}
