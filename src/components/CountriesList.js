import React, { Component, PropTypes } from 'react';

import Country from './Country';

export default class CountriesList extends Component {
  constructor(props){
    super(props);
  }

  renderCountry(country) {
    return <Country key={country.name} country={country} />;
  }

  render() {
    const {data} = this.props.countries;

    return (
      <table className='ui table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {data.map(this.renderCountry)}
        </tbody>
      </table>
    );
  }
}

CountriesList.propTypes = {
  countries: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
