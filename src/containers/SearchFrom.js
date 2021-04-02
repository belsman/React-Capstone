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
    <form className="form-inline ml-auto" onSubmit={handleSubmit} method="POST">
      <input className="form-control custom-form-group mt-1 mr-sm-2" placeholder="Search" type="text" name="search" id="search" value={searchTerm} onChange={handleInputChange} required />
      <select className="form-control custom-form-group mt-1 mr-sm-2" name="selectExchange" id="selectExchange" value={exchange} onChange={handleSelectChange}>
        {exchanges.map(item => exchangeOption(item))}
      </select>
      <button type="submit" className="mt-1 btn btn-primary">Search</button>
    </form>
  );
};

export default SearchForm;
