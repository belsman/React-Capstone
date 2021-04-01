import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Stock from './Stock';

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

const stock = {
  ticker: 'BS',
  changes: 4,
  price: '4000',
  changesPercentage: '(1%)',
  companyName: 'belsman',
};

const stock2 = {
  ticker: 'NG',
  changes: -4,
  price: '4000',
  changesPercentage: '(-1%)',
  companyName: 'Niger Company',
};

it('renders with with the correct stock info for stock1', () => {
  act(() => {
    render(<Stock stock={stock} />, container);
  });

  const h5 = document.querySelector('article h5');
  expect(h5.textContent).toBe('BS');

  const h6 = document.querySelector('article h6');
  expect(h6.textContent).toBe('belsman');

  const spans = document.querySelectorAll('span');
  const changesPercentageSPan = spans[spans.length - 1];
  expect(changesPercentageSPan.className).toBe('text-success');
});

it('renders with with the correct stock info for stock2', () => {
  act(() => {
    render(<Stock stock={stock2} />, container);
  });

  const spans = document.querySelectorAll('span');
  const changesPercentageSPan = spans[spans.length - 1];
  expect(changesPercentageSPan.className).toBe('text-danger');
});
