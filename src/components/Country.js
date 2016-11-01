import React, {Component} from 'react';

export default class Country extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {country} = this.props;

    return (
      <tr>
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.population}</td>
        <td>{country.topLevelDomain}</td>
      </tr>
    );
  }
}
