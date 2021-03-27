import client from '../api/client';

const initialState = {
  activeStocks: { data: [], stockStatus: 'idle' },
  gainingStocks: { data: [], stockStatus: 'idle' },
  losingStocks: { data: [], stockStatus: 'idle' },
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
  const url = `${baseUrl}${stocksCategory[category || 'activeStocks']}?apikey=${apiKey}`;

  return async dispatch => {
    dispatch({ type: `stocks/${category}Started` });
    const data = await client.get(url);
    dispatch({ type: `stocks/${category}Loaded`, payload: data });
  };
};

export default stocks;
