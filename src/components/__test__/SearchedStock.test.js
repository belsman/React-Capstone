import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Stock from '../SearchedStock';

jest.mock('react-router-dom', () => ({
  Link() {
    return (
      <div>A Dummy Link</div>
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

const searchedStock = {
  symbol: 'PRAA',
  name: 'PRA Group, Inc.',
  currency: 'USD',
  stockExchange: 'NasdaqGS',
  exchangeShortName: 'NASDAQ',
};

it('renders with with the correct stock info for searched stock', () => {
  act(() => {
    render(<Stock stock={searchedStock} />, container);
  });

  const h4 = document.querySelector('article h4');
  expect(h4.textContent).toBe('PRAA');

  const h6 = document.querySelector('article h6');
  expect(h6.textContent).toBe('PRA Group, Inc.');
});

it('should render the expected output', () => {
  act(() => {
    render(<Stock stock={searchedStock} />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
