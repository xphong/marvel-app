import React, { Component, PropTypes } from 'react';

import Nav from '../components/ui/Nav';

export default class App extends Component {

  render() {
    const {children} = this.props;
    
    return (
      <div>
        <Nav />
        <div className='ui main container'>
          {children}
        </div>
      </div>
    );
  }
}
