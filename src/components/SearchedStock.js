import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchedStock = ({ stock }) => (
  <div className="card stock-card mb-1">
    <article className="card-body">
      <h4>{stock.symbol}</h4>
      <h6 className="text-truncate">{stock.name}</h6>
      <div className="my-3 py-2">
        <div className="d-flex justify-content-between mb-1">
          <span>Currency</span>
          <span className="h6 text-secondary">
            {stock.currency}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Exchange</span>
          <span className="h6 text-secondary">
            {stock.stockExchange}
          </span>
        </div>
      </div>
      <Link to={`/stocks/${stock.symbol}`} className="btn btn-outline-info">
        View stock
      </Link>
    </article>
  </div>
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
