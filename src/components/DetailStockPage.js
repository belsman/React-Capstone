import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchStock } from '../reducers/detailStock';

const DetailStockPage = ({ match }) => {
  const { stickerName } = match.params;
  const dispatch = useDispatch();
  const stockDetail = useSelector(state => state.stockDetail);
  const { data, stockStatus, stockError } = stockDetail;
  const { symbol } = data;

  useEffect(() => {
    if (stockStatus === 'idle' || symbol !== stickerName) {
      dispatch(fetchStock(stickerName));
    }
  }, [dispatch, stockStatus, symbol, stickerName]);

  let content;

  const stockInfo = data => (
    <article className="stock">
      <h2>{data.companyName}</h2>
      <ul>
        <li>
          Market Cap :
          {data.mktCap}
        </li>
        <li>
          price :
          {data.price}
        </li>
        <li>
          Changes:
          {data.changes}
        </li>
      </ul>
      <h4>Description</h4>
      <p>{data.description}</p>
    </article>
  );

  if (stockStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (stockStatus === 'completed') {
    content = stockInfo(data);
  } else if (stockStatus === 'failed') {
    content = <div>{stockError}</div>;
  }

  return (
    <section>
      {content}
    </section>
  );
};

DetailStockPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      stickerName: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailStockPage;
