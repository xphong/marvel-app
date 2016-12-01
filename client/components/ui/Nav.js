import React from 'react';
import { IndexLink, Link } from 'react-router';

const Nav = () => (
  <div className='ui fixed menu'>
    <div className='ui container'>
      <div className='header item'>
        Marvel App
      </div>
      <IndexLink to='/' className='item' activeClassName='route--active'>
        Home
      </IndexLink>
      <Link to='/powerlevels' className='item' activeClassName='route--active'>
        Power Levels
      </Link>
      <Link to='/about' className='item' activeClassName='route--active'>
        About
      </Link>
    </div>
  </div>
);

export default Nav;
