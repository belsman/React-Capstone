import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectActiveStocks } from '../reducers/stocks';

function StocksList() {
  const stocks = useSelector(state => selectActiveStocks(state));

  return (
    <section>
      {stocks.map(stock => (
        <article key={stock.ticker}>
          <h2>{stock.companyName}</h2>
          <h3>{stock.ticker}</h3>
          <ul>
            <li>{stock.price}</li>
            <li>{stock.changesPercentage}</li>
            <li>{stock.changes}</li>
          </ul>
          <Link to={`/stocks/${stock.ticker}`} className="button muted-button">
            View stock!
          </Link>
        </article>
      ))}
    </section>
  );
}

export default StocksList;
