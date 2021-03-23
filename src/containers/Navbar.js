import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <section>
      <h1>Stocks Listing!</h1>

      <div className="navContent">
        <div className="navLinks">
          <Link to="/">Stocks</Link>
        </div>
      </div>
    </section>
  </nav>
);

export default Navbar;
