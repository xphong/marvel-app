import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className='fadeIn-page-animation'>
        <h1>About</h1>
        <h4>Marvel Search App</h4>
        <ul>
          <li>Searches the Marvel database for the characters, power levels</li>
          <li>Built using <a href='https://github.com/xphong/simple-react-redux-starter' target='_blank'>simple-react-redux-starter</a> and the <a href='http://developer.marvel.com/' target='_blank'>Marvel API</a></li>
          <li><a href='https://github.com/xphong/marvel-react-app' target='_blank'>Github Link</a></li>
          <li><a href='http://marvel.com' target='_blank'>Data provided by Marvel. © {new Date().getFullYear()} Marvel</a></li>
        </ul>
      </div>
    );
  }
}
