import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';

import ClipLoader from 'react-spinners/ClipLoader';
import override from '../../syledComponent';

import StocksList from '../StocksList';
import Stock from '../../components/Stock';
import SelectStockCategory from '../../components/SelectStockCategory';

jest.mock('../../components/Stock', () => function Stock() {
  return <div>Hello</div>;
});

jest.mock('../../components/SelectStockCategory', () => function Stock() {
  return <div>Category</div>;
});

jest.mock('react-redux', () => ({
  useDispatch(fn) {
    return fn;
  },
  useSelector() {
    return {
      data: [{
        ticker: 'NVR',
        changes: -98.87,
        price: '3931.93',
        changesPercentage: '(-2.45%)',
        companyName: 'NVR Inc',
      }, {
        ticker: 'AMZN',
        changes: -73.38,
        price: '3294.62',
        changesPercentage: '(-2.18%)',
        companyName: 'Amazon.com Inc',
      }, {
        ticker: 'GOOG',
        changes: -50.8,
        price: '1591.04',
        changesPercentage: '(-3.09%)',
        companyName: 'Alphabet Inc.',
      },
      ],
      stockStatus: 'completed',
      stockError: null,
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

it('renders with with the correct stocks-lists based on the store data', () => {
  act(() => {
    render(<StocksList />, container);
  });

  const stocks = document.querySelector('div.stock-list-container');
  expect(stocks.children).toHaveLength(3);
});

it('should render the expected output', () => {
  act(() => {
    render(<StocksList />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
