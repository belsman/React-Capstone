import client from '../api/client';

const initialState = {
  data: {},
  stockStatus: 'idle',
  stockError: null,
};

const stockDetail = (state = initialState, action) => {
  switch (action.type) {
    case 'detail/StockStarted':
      return { ...state, stockStatus: 'loading' };

    case 'detail/StockLoaded':
      return { ...state, data: action.payload, stockStatus: 'completed' };

    case 'detail/StockError':
      return { ...state, stockError: action.error, stockStatus: 'failed' };

    default:
      return state;
  }
};

export const fetchStock = stockSymbol => {
  const baseUrl = 'https://financialmodelingprep.com/api/v3/profile/';
  const apiKey = 'f2223d63be9ab529a313ed201fbaee30';
  const url = `${baseUrl}${stockSymbol}?apikey=${apiKey}`;

  return async dispatch => {
    dispatch({ type: 'detail/StockStarted' });
    try {
      const data = await client.get(url);
      dispatch({ type: 'detail/StockLoaded', payload: data[0] });
    } catch (error) {
      dispatch({ type: 'detail/StockError', error: error.message });
    }
  };
};

export default stockDetail;
