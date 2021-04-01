import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchForm from '../SearchFrom';

jest.mock('react-redux', () => ({
  useDispatch() {
    return {};
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
    render(<SearchForm />, container);
  });

  const { forms } = document;
  expect(forms).toHaveLength(1);

  const input = document.querySelector('form input');
  expect(input.value).toBe('');

  const select = document.querySelector('form select');
  expect(select.value).toBe('NASDAQ');
});

it('should render the expected output', () => {
  act(() => {
    render(<SearchForm />, container);
  });

  expect(
    pretty(container.innerHTML),
  ).toMatchSnapshot();
});
