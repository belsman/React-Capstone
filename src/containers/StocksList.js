import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClipLoader from 'react-spinners/ClipLoader';

import Stock from '../components/Stock';
import SelectStockCategory from './SelectStockCategory';

import { fetchStocks, selectCurrentStocksByFilter } from '../reducers/stocks';
import override from '../syledComponent';

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
    content = (
      <div className="loader">
        <ClipLoader color="#0000ff" css={override} size={150} />
      </div>
    );
  } else if (currentStocksStatus === 'completed') {
    content = currentStocksData.map(stock => <Stock key={stock.ticker} stock={stock} />);
  } else if (currentStocksStatus === 'failed') {
    content = <div className="error text-danger">{error}</div>;
  }

  return (
    <>
      <div className="border mb-2 p-2 d-sm-flex justify-content-sm-between">
        <small>
          <a href="https://financialmodelingprep.com/developer/docs/" className="font-italic" target="_blank" rel="noreferrer">
            Data provided by Financial Modeling Prep
          </a>
        </small>
        <SelectStockCategory />
      </div>
      <div className="p-1">
        <div className="stock-list-container">
          {content}
        </div>
      </div>
    </>
  );
};

export default StocksList;
