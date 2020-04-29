import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav>
      <h1><Link to="/">Recipe Finder!</Link></h1>
      <Link to="/search">Search Recipes!</Link>
    </nav>
  )
}

export default Header
