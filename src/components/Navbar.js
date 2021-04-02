import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../containers/SearchFrom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link to="/" className="navbar-brand text-white">Stockr</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            <span className="sr-only">(current)</span>
          </Link>
        </li>
      </ul>
      <SearchForm />
    </div>
  </nav>
);

export default Navbar;
