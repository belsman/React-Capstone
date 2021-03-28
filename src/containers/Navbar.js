import React from 'react';
import { Link } from 'react-router-dom';

import SearchForm from '../components/SearchFrom';

const Navbar = () => (
  <nav>
    <section>
      <h1>Stocks Listing!</h1>

      <div className="navContent">
        <div className="navLinks">
          <Link to="/">Stocks</Link>
        </div>
        <SearchForm />
      </div>
    </section>
  </nav>
);

export default Navbar;
