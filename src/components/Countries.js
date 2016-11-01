import React, { Component, PropTypes } from 'react';

import Country from './Country';

export default class Countries extends Component {
  constructor(props){
    super(props);
  }

  renderCountry(country) {
    return <Country key={country.name} country={country} />;
  }

  render() {
    const {data} = this.props.countries;

    return (
      <div className='tableContainer'>
        <h3>Countries List</h3>
        <table className='table table-bordered table-striped'>
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
      </div>
    );
  }
}

Countries.propTypes = {
  countries: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
