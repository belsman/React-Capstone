function StocksList() {
  const stocks = [
    {
      ticker: 'NVR',
      changes: -98.87,
      price: '3931.93',
      changesPercentage: '(-2.45%)',
      companyName: 'NVR Inc',
    },
    {
      ticker: 'AMZN',
      changes: -73.38,
      price: '3294.62',
      changesPercentage: '(-2.18%)',
      companyName: 'Amazon.com Inc',
    },
    {
      ticker: 'GOOG',
      changes: -50.8,
      price: '1591.04',
      changesPercentage: '(-3.09%)',
      companyName: 'Alphabet Inc.',
    },
  ];

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
        </article>
      ))}
    </section>
  );
}

export default StocksList;
