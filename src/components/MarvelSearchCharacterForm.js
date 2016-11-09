import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MarvelSearchCharacterForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {characterName: null};
  }

  handleSpacesOnKeypress(event) {
    if (event.which === 32) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSearch(event) {
    event.preventDefault();

    this.props.actions.fetchMarvelCharactersByName(this.state.characterName);
    this.resetForm();
  }

  resetForm() {
    ReactDOM.findDOMNode(this.refs.searchCharacterForm).reset();
    ReactDOM.findDOMNode(this.refs.characterName).focus();
    this.state = {characterName: null};
  }

  render() {
    return (
      <div className='search-character__form'>
        <form ref='searchCharacterForm'
              onSubmit={this.handleSearch.bind(this)}
              onChange={this.handleInputChange.bind(this)}>

          <div className='ui action input'>
            <input ref='characterName'
                   name='characterName'
                   placeholder='Character Name'
                   type='text'
                   onKeyPress={this.handleSpacesOnKeypress}
                   required
                   />

              <button className='ui icon pink button'>
                  <i className='search icon'></i>
              </button>
          </div>
        </form>
      </div>
    );
  }
}
