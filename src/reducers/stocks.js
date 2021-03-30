import dotenv from 'dotenv';
import client from '../api/client';

dotenv.config();

const initialState = {
  activeStocks: { data: [], stockStatus: 'idle', stockError: null },
  gainingStocks: { data: [], stockStatus: 'idle', stockError: null },
  losingStocks: { data: [], stockStatus: 'idle', stockError: null },
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case 'stocks/activeStocksStarted':
      return {
        ...state,
        activeStocks: { ...state.activeStocks, stockStatus: 'loading' },
      };

    case 'stocks/activeStocksLoaded':
      return {
        ...state,
        activeStocks: { ...state.activeStocks, data: action.payload, stockStatus: 'completed' },
      };

    case 'stocks/activeStocksError':
      return {
        ...state,
        activeStocks: { ...state.activeStocks, stockError: action.error, stockStatus: 'failed' },
      };

    case 'stocks/losingStocksStarted':
      return {
        ...state,
        losingStocks: { ...state.losingStocks, stockStatus: 'loading' },
      };
    case 'stocks/losingStocksLoaded':
      return {
        ...state,
        losingStocks: { ...state.losingStocks, data: action.payload, stockStatus: 'completed' },
      };

    case 'stocks/losingStocksError':
      return {
        ...state,
        losingStocks: { ...state.losingStocks, stockError: action.error, stockStatus: 'failed' },
      };

    case 'stocks/gainingStocksStarted':
      return {
        ...state,
        gainingStocks: { ...state.gainingStocks, stockStatus: 'loading' },
      };
    case 'stocks/gainingStocksLoaded':
      return {
        ...state,
        gainingStocks: { ...state.gainingStocks, data: action.payload, stockStatus: 'completed' },
      };
    case 'stocks/gainingStocksError':
      return {
        ...state,
        gainingStocks: { ...state.gainingStocks, stockError: action.error, stockStatus: 'failed' },
      };
    default:
      return state;
  }
};

export const selectCurrentStocksByFilter = (filterValue, state) => state.stocks[filterValue];

export const fetchStocks = category => {
  const stocksCategory = {
    activeStocks: 'actives',
    losingStocks: 'losers',
    gainingStocks: 'gainers',
  };

  const baseUrl = 'https://financialmodelingprep.com/api/v3/';
  const apiKey = process.env.REACT_APP_API_SECRET_KEY;
  const url = `${baseUrl}${stocksCategory[category || 'activeStocks']}?apikey=${apiKey}`;

  return async dispatch => {
    dispatch({ type: `stocks/${category}Started` });
    try {
      const data = await client.get(url);
      dispatch({ type: `stocks/${category}Loaded`, payload: data });
    } catch (error) {
      dispatch({ type: `stocks/${category}Error`, error: error.message });
    }
  };
};

export default stocks;
