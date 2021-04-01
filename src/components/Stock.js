import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Stock = ({ stock }) => (
  <div className="card stock-card mb-1">
    <article className="card-body">
      <h5>{stock.ticker}</h5>
      <h6 className="text-truncate">{stock.companyName}</h6>
      <div className="my-2 py-2">
        <span className="">Price</span>
        <div className="d-flex justify-content-between">
          <span className="h5 text-secondary">
            $
            {' '}
            {stock.price}
          </span>
          <span className={stock.changes < 0 ? 'text-danger' : 'text-success'}>
            {stock.changesPercentage.replace(/[()]+/g, '')}
            {' '}
            <i className={stock.changes < 0 ? 'fa fa-arrow-down' : 'fa fa-arrow-up'} />
          </span>
        </div>
      </div>
      <Link to={`/stocks/${stock.ticker}`} className="btn btn-outline-info">
        View stock
      </Link>
    </article>
  </div>
);

Stock.propTypes = {
  stock: PropTypes.shape({
    ticker: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    changesPercentage: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Stock;
