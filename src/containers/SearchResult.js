import React from 'react';
import { useSelector } from 'react-redux';

import ClipLoader from 'react-spinners/ClipLoader';

import SearchedStock from '../components/SearchedStock';
import override from '../syledComponent';

const SearchResult = () => {
  const results = useSelector(state => state.searchResult);
  const { data, searchStatus, searchError } = results;

  let content;

  if (searchStatus === 'loading') {
    content = (
      <div className="loader">
        <ClipLoader color="#0000ff" css={override} size={150} />
      </div>
    );
  } else if (searchStatus === 'completed') {
    content = data.map(stock => <SearchedStock key={stock.symbol} stock={stock} />);
  } else if (searchStatus === 'failed') {
    content = <div className="error">{searchError}</div>;
  }

  return (
    <div className="p-1">
      <section className="stock-list-container mt-2">
        {content || <h2>No matching Result found!</h2>}
      </section>
    </div>
  );
};

export default SearchResult;
