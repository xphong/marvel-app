import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Nav = () => (
  <div className='ui fixed menu'>
    <div className='ui container'>
      <div className="header item">
        Marvel Search App
      </div>
      <IndexLink to='/' className="item" activeClassName='route--active'>
        Home
      </IndexLink>
      <Link to='/countries' className="item" activeClassName='route--active'>
        Countries
      </Link>
      <Link to='/about' className="item" activeClassName='route--active'>
        About
      </Link>
    </div>
  </div>
);

export default Nav;
