/* eslint-disable */
import client from '../api/client';

const initialState = {
  activeStocks: { data: [], status: 'idle'},
  gainingStocks: { data: [], status: 'idle'},
  lossingStocks: { data: [], status: 'idle'},
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case 'stocks/activeStockLoaded':
      return {
        ...state,
        activeStocks: { ...status.activeStocks, data: action.payload, status: 'completed' },
      }
    default:
      return state;
  }
};

export const selectCurrentStocksByFilter = (filterValue, state) => state.stocks[filterValue]; 

export async function fetchStocks(dispatch, getState) {
  const url = 'https://financialmodelingprep.com/api/v3/actives?apikey=f2223d63be9ab529a313ed201fbaee30';
  const data = await client.get(url);
  dispatch({ type: 'stocks/activeStockLoaded', payload: data });
}

export default stocks;
