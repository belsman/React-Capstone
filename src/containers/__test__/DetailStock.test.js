import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';

import ClipLoader from 'react-spinners/ClipLoader';
import override from '../../syledComponent';

import { fetchStock } from '../../reducers/detailStock';

import DetailStockPage from '../DetailStockPage';

jest.mock('react-redux', () => ({
  useDispatch(fn) {
    return fn;
  },
  useSelector() {
    return {
      data: {
        symbol: 'AAPL',
        price: 113.02,
        beta: 1.34434,
        volAvg: 172070917,
        mktCap: 1932924420000,
        lastDiv: 0.7825,
        range: '53.1525-137.98',
        changes: -3.77,
        companyName: 'Apple Inc',
        currency: 'USD',
        isin: 'US0378331005',
        cusip: '037833100',
        exchange: 'Nasdaq Global Select',
        exchangeShortName: 'NASDAQ',
        industry: 'Consumer Electronics',
        website: 'https://www.apple.com/',
        description: "Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. The company is headquartered in Cupertino, California and currently employs 137,000 full-time employees. The company is considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft. The firm's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart speaker. Apple's software includes the macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam acoustic fingerprint utility, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.",
        ceo: 'Mr. Timothy Cook',
        sector: 'Technology',
      },
      stockStatus: 'completed',
      stockError: null,
    };
  },
}));

jest.mock('../../syledComponent', () => function override() {
  return 'some css to';
});

jest.mock('../../reducers/detailStock', () => function fetchStock() {
  return () => ({
    stickerName: 'AAPL',
    companyName: 'Apple Inc',
  });
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

it('renders with with the correct stock details page for the fetched stock', () => {
  act(() => {
    render(<DetailStockPage match={match} />, container);
  });

  const h2 = document.querySelector('article header h2');
  expect(h2.textContent).toBe('Apple Inc');

  const h5 = document.querySelector('article header h5');
  expect(h5.textContent).toBe('AAPL');
});
