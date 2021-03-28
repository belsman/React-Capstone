import React from 'react';
import { useSelector } from 'react-redux';

import SearchedStock from '../components/SearchedStock';

const SearchResult = () => {
  const results = useSelector(state => state.searchResult);
  const content = results.data.map(stock => <SearchedStock key={stock.symbol} stock={stock} />);

  return (
    <section>
      {content || <h2>No matching Result found!</h2>}
    </section>
  );
};

export default SearchResult;
