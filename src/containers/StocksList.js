import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStocks, selectCurrentStocksByFilter } from '../reducers/stocks';

function StocksList() {
  const dispatch = useDispatch();
  const currentStocks = useSelector(state => {
    const filter = state.visibilityFilter;
    return selectCurrentStocksByFilter(filter, state);
  });

  const currentStocksData = currentStocks.data;
  const currentStocksStatus = currentStocks.status;

  useEffect(() => {
    if (currentStocksStatus === 'idle') {
      dispatch(fetchStocks);
    }
  }, [dispatch, currentStocksStatus]);

  return (
    <section>
      {currentStocksData.map(stock => (
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
      ))}
    </section>
  );
}

export default StocksList;
