import dotenv from 'dotenv';
import client from '../api/client';

dotenv.config();

const initialState = {
  data: {},
  stockStatus: 'idle',
  stockError: null,
};

const stockDetail = (state = initialState, action) => {
  switch (action.type) {
    case 'detail/StockStarted':
      return { ...state, stockStatus: 'loading', stockError: null };

    case 'detail/StockLoaded':
      return {
        ...state, data: action.payload, stockStatus: 'completed', stockError: null,
      };

    case 'detail/StockError':
      return { ...state, stockError: action.error, stockStatus: 'failed' };

    default:
      return state;
  }
};

export const fetchStock = stockSymbol => {
  const baseUrl = 'https://financialmodelingprep.com/api/v3/profile/';
  const apiKey = process.env.REACT_APP_API_SECRET_KEY;
  const url = `${baseUrl}${stockSymbol}?apikey=${apiKey}`;

  return async dispatch => {
    dispatch({ type: 'detail/StockStarted' });
    try {
      const data = await client.get(url);
      dispatch({ type: 'detail/StockLoaded', payload: data[0] });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default stockDetail;
