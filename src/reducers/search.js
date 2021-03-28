import client from '../api/client';

const initialState = {
  data: [],
  searchStatus: 'idle',
  searchError: null,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'search/searchStarted':
      return { ...state, searchStatus: 'loading', searchError: null };

    case 'search/searchLoaded':
      return {
        ...state, data: action.payload, searchStatus: 'completed', searchError: null,
      };

    case 'search/searchError':
      return { ...state, searchError: action.error, searchStatus: 'failed' };

    default:
      return state;
  }
};

export const searchStock = (searchTerm, exchange) => {
  const baseUrl = 'https://financialmodelingprep.com/api/v3/search';
  const apiKey = 'f2223d63be9ab529a313ed201fbaee30';
  const url = `${baseUrl}?query=${searchTerm}&limit=10&exchange=${exchange}&apikey=${apiKey}`;

  return async dispatch => {
    dispatch({ type: 'search/searchStarted' });
    try {
      const data = await client.get(url);
      dispatch({ type: 'search/searchLoaded', payload: data });
    } catch (error) {
      dispatch({ type: 'search/searchError', error: error.message });
    }
  };
};

export default search;
