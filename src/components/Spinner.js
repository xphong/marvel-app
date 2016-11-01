import React, { Component } from 'react';

export default class Spinner extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='loading'>Loading&#8230;</div>
    );
  }
};
