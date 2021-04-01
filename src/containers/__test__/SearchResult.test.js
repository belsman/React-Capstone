import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';

import ClipLoader from 'react-spinners/ClipLoader';
import override from '../../syledComponent';

import SearchResult from '../SearchResult';
import SearchedStock from '../../components/SearchedStock';

jest.mock('../../components/SearchedStock', () => function SearchedStock() {
  return <div>Hello</div>;
});

jest.mock('react-redux', () => ({
  useDispatch(fn) {
    return fn;
  },
  useSelector() {
    return {
      data: [{
        symbol: 'PRAA',
        name: 'PRA Group, Inc.',
        currency: 'USD',
        stockExchange: 'NasdaqGS',
        exchangeShortName: 'NASDAQ',
      },
      {
        symbol: 'PAAS',
        name: 'Pan American Silver Corp.',
        currency: 'USD',
        stockExchange: 'NasdaqGS',
        exchangeShortName: 'NASDAQ',
      },
      ],
      searchStatus: 'completed',
      searchError: null,
    };
  },
}));

jest.mock('../../syledComponent', () => function override() {
  return 'some css to';
});

jest.mock('react-spinners/ClipLoader', () => ({
  ClipLoader() {
    return (
      <div>Spin</div>
    );
  },
}));

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const match = {
  params: {
    stickerName: 'AAPL',
  },
};

it('renders with with the correct stocks-lists based on the store data', () => {
  act(() => {
    render(<SearchResult />, container);
  });

  const stocks = document.querySelector('section.stock-list-container');
  expect(stocks.children).toHaveLength(2);
});

it('should render the expected output', () => {
  act(() => {
    render(<SearchResult />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
