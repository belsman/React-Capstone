import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import ClipLoader from 'react-spinners/ClipLoader';

import { fetchStock } from '../reducers/detailStock';

import override from '../syledComponent';

const DetailStockPage = ({ match }) => {
  const { stickerName } = match.params;
  const dispatch = useDispatch();
  const stockDetail = useSelector(state => state.stockDetail);
  const { data, stockStatus } = stockDetail;
  const { symbol } = data;

  useEffect(() => {
    if (stockStatus === 'idle' || symbol !== stickerName) {
      dispatch(fetchStock(stickerName));
    }
  }, [dispatch, stockStatus, symbol, stickerName]);

  let content;

  const stockInfo = data => (
    <article className="stock">
      <header className="text-center">
        <h2 className="text-secondary">{data.companyName}</h2>
        <h5>{stickerName}</h5>
      </header>
      <ul className="list-group mb-1">
        <li className="list-group-item d-flex justify-content-between">
          <span>Industry</span>
          <span>{data.industry}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Beta</span>
          <span>{data.beta}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Volume Average</span>
          <span>{data.volAvg}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Last Dividend</span>
          <span>{data.lastDiv}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Market Cap</span>
          <span>{data.mktCap}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Price</span>
          <span>{data.price}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Currency</span>
          <span>{data.currency}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Changes</span>
          <span>{data.changes}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Website</span>
          <span>
            <a href={data.website} target="_blank" rel="noreferrer">{data.website}</a>
          </span>
        </li>
      </ul>
      <section className="desc px-3 border">
        <h4>Description</h4>
        <p className="text-justify">{data.description}</p>
      </section>
    </article>
  );

  if (stockStatus === 'loading') {
    content = (
      <div className="loader">
        <ClipLoader css={override} size={150} />
      </div>
    );
  } else if (stockStatus === 'completed') {
    content = stockInfo(data);
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
