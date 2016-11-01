import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Nav from '../components/Nav';
import Spinner from '../components/Spinner';
import * as CountriesActions from '../actions/CountriesActions';
import Countries from '../components/Countries';

export class App extends Component {
  componentDidMount() {
    this.props.actions.fetchCountries('https://restcountries.eu/rest/v1/all');
  }

  render() {
    const { countries, actions } = this.props;
    
    return (
      <div>
        <Nav />
        <div className='ui main container'>
          {countries.isLoading ? <Spinner /> : <Countries countries={countries} actions={actions} />}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  countries: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    countries: state.countries
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CountriesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
