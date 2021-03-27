import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Stock from '../components/Stock';
import { fetchStocks, selectCurrentStocksByFilter } from '../reducers/stocks';

function StocksList() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.visibilityFilter)
  const currentStocks = useSelector(state => {
    return selectCurrentStocksByFilter(filter, state);
  });

  const currentStocksData = currentStocks.data;
  const currentStocksStatus = currentStocks.status;

  useEffect(() => {
    if (currentStocksStatus === 'idle') {
      dispatch(fetchStocks(filter));
    }
  }, [dispatch, currentStocksStatus]);

  let content;
  const error = null;

  if (currentStocksStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (currentStocksStatus === 'completed') {
    content = currentStocksData.map(stock => <Stock key={stock.ticker} stock={stock} />);
  } else if (currentStocksStatus === 'failure') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      {content}
    </section>
  );
}

export default StocksList;
