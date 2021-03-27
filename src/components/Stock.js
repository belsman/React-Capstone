import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Stock = ({ stock }) => (
  <article key={stock.ticker}>
    <h2>{stock.companyName}</h2>
    <h3>{stock.ticker}</h3>
    <ul>
      <li>{stock.price}</li>
      <li>{stock.changesPercentage}</li>
      <li>{stock.changes}</li>
    </ul>
    <Link to={`/stocks/${stock.ticker}`} className="button muted-button">
      View stock!
    </Link>
  </article>
);

Stock.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    changesPercentage: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Stock;
