import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

const DetailStockPage = ({ match }) => {
  const { stickerName } = match.params;

  // const post = useSelector((state) => selectPostById(state, postId))

  return (
    <section>
      <article className="stock">
        <h2>{stickerName}</h2>
      </article>
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
