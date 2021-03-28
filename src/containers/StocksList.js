import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Stock from '../components/Stock';
import { fetchStocks, selectCurrentStocksByFilter } from '../reducers/stocks';

const StocksList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.visibilityFilter);
  const currentStocks = useSelector(state => selectCurrentStocksByFilter(filter, state));

  const currentStocksData = currentStocks.data;
  const currentStocksStatus = currentStocks.stockStatus;
  const error = currentStocks.stockError;

  useEffect(() => {
    if (currentStocksStatus === 'idle') {
      dispatch(fetchStocks(filter));
    }
  }, [dispatch, currentStocksStatus]);

  let content;

  if (currentStocksStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (currentStocksStatus === 'completed') {
    content = currentStocksData.map(stock => <Stock key={stock.ticker} stock={stock} />);
  } else if (currentStocksStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

export default StocksList;
