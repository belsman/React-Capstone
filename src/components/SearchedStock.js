import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchedStock = ({ stock }) => (
  <article key={stock.symbol}>
    <h2>{stock.name}</h2>
    <h3>{stock.symbol}</h3>
    <ul>
      <li>
        Currency:
        {stock.currency}
      </li>
      <li>
        Exchange:
        {stock.stockExchange}
      </li>
    </ul>
    <Link to={`/stocks/${stock.symbol}`} className="button muted-button">
      View stock!
    </Link>
  </article>
);

SearchedStock.propTypes = {
  stock: PropTypes.shape({
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    stockExchange: PropTypes.string.isRequired,
    exchangeShortName: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchedStock;
