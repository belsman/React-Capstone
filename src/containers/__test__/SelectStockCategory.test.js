import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SelectStockCategory from '../SelectStockCategory';

jest.mock('react-redux', () => ({
  useDispatch() {
    return {};
  },
  useSelector() {
    return 'gainingStocks';
  },
}));

jest.mock('react-router-dom', () => ({
  useHistory() {
    return [];
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

it('renders with with the correct form input data', () => {
  act(() => {
    render(<SelectStockCategory />, container);
  });

  const select = document.querySelector('select');
  expect(select).toHaveLength(3);

  expect(select.value).toBe('gainingStocks');
});

it('should render the expected output', () => {
  act(() => {
    render(<SelectStockCategory />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
