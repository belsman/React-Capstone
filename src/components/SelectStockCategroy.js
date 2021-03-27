import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SelectStockCategory = () => {
  const dispatch = useDispatch();
  const currentSelectedFilter = useSelector(state => state.visibilityFilter);

  const handleInputChange = e => dispatch({ type: 'SET_VISIBILITY_FILTER', payload: e.target.value });

  return (
    <select name="stockCategory" id="stockCategory" value={currentSelectedFilter} onChange={handleInputChange}>
      <option value="activeStocks">Active Stocks</option>
      <option value="gainingStocks">Gainers</option>
      <option value="losingStocks">Losers</option>
    </select>
  );
};

export default SelectStockCategory;
