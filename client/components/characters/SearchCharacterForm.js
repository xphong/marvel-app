import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

export default class SearchCharacterForm extends Component {
  constructor() {
    super();

    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      characterName: null
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSearch(event) {
    event.preventDefault();

    this.props.actions.fetchCharactersByName(this.state.characterName);
    browserHistory.push(`/characters/${this.state.characterName}`);

    this.resetForm();
  }

  resetForm() {
    ReactDOM.findDOMNode(this.refs.searchCharacterForm).reset();
    ReactDOM.findDOMNode(this.refs.characterName).focus();
    this.state = { characterName: null };
  }

  render() {
    return (
      <div className="search-character__form">
        <form ref="searchCharacterForm"
          onSubmit={this.handleSearch}
          onChange={this.handleInputChange}
        >

          <div className="ui action input">
            <input ref="characterName"
              name="characterName"
              placeholder="Character Name"
              type="text"
              required
            />

              <button className="ui icon pink button">
                  <i className="search icon" />
              </button>
          </div>
        </form>
      </div>
    );
  }
}
