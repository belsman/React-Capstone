/* eslint-disable */

const initialState = {
  activeStocks: [
    {
      ticker: 'NVR',
      changes: -98.87,
      price: '3931.93',
      changesPercentage: '(-2.45%)',
      companyName: 'NVR Inc',
    },
    {
      ticker: 'AMZN',
      changes: -73.38,
      price: '3294.62',
      changesPercentage: '(-2.18%)',
      companyName: 'Amazon.com Inc',
    },
    {
      ticker: 'GOOG',
      changes: -50.8,
      price: '1591.04',
      changesPercentage: '(-3.09%)',
      companyName: 'Alphabet Inc.',
    },
  ],
  lossingStocks: [],
  gainingStocks: [],
};

const stocks = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVE_STOCKS':
      return {
        ...state,
        activeStocks: action.payload,
      }
    case 'FETCH_LOSSING_STOCKS':
      return {
        ...state,
        lossingStocks: action.payload,
      }
    case 'FETCH_GAINING_STOCKS':
      return {
        ...state,
        gainingStocks: action.payload,
      }
    default:
      return state
  }
};

export default stocks;
