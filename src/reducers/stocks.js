/* eslint-disable */
import client from '../api/client';

const initialState = {
  activeStocks: { data: [], status: 'idle'},
  gainingStocks: { data: [], status: 'idle'},
  losingStocks: { data: [], status: 'idle'},
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case 'stocks/activeStockStarted':
      return {
        ...state,
        activeStocks: { ...status.activeStocks, status: 'loading' },
      }
    case 'stocks/activeStockLoaded':
      return {
        ...state,
        activeStocks: { ...status.activeStocks, data: action.payload, status: 'completed' },
      }

    case 'stocks/losingStockStarted':
      return {
        ...state,
        losingStocks: { ...status.losingStocks, status: 'loading' },
      }
    case 'stocks/losingStockLoaded':
      return {
        ...state,
        losingStocks: { ...status.losingStocks, data: action.payload, status: 'completed' },
      }

    case 'stocks/gainingStockStarted':
      return {
        ...state,
        gainingStocks: { ...status.gainingStocks, status: 'loading' },
      }
    case 'stocks/gainingStockLoaded':
      return {
        ...state,
        gainingStocks: { ...status.gainingStocks, data: action.payload, status: 'completed' },
      }
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
  const apiKey = 'f2223d63be9ab529a313ed201fbaee30';
  const url = `${baseUrl}${stocksCategory[category || 'actives']}?apikey=${apiKey}`;

  return async (dispatch, getState) => {
    dispatch({ type: `stocks/${category}Started` });
    const data = await client.get(url);
    dispatch({ type: `stocks/${category}Loaded`, payload: data });
  }
};

export default stocks;
