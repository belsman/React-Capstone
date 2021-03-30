import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../components/SearchFrom';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <h1>
      <Link to="/" className="navbar-brand">Stockr</Link>
    </h1>
    <SearchForm />
  </nav>
);

export default Navbar;
