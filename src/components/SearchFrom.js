import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { searchStock } from '../reducers/search';

const SearchForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [exchange, setExchange] = useState('NASDAQ');

  const exchanges = [
    'ETF', 'MUTUAL_FUND', 'COMMODITY', 'INDEX', 'CRYPTO ',
    'FOREX', 'TSX', 'AMEX', 'NASDAQ', 'NYSE', 'EURONEXT',
    'XETRA', 'NSE', 'LSE',
  ];

  const handleInputChange = e => setSearchTerm(e.target.value);

  const handleSelectChange = e => setExchange(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(searchStock(searchTerm, exchange));
    history.push('/search');
  };

  const exchangeOption = exchange => <option key={exchange} value={exchange}>{exchange}</option>;

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <input placeholder="Search" type="text" name="search" id="search" value={searchTerm} onChange={handleInputChange} required />
        <select name="selectExchange" id="selectExchange" value={exchange} onChange={handleSelectChange}>
          {exchanges.map(item => exchangeOption(item))}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
