import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import StocksList from './containers/StocksList';
import DetailStockPage from './components/DetailStockPage';
import Navbar from './containers/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <StocksList />
              </>
            )}
          />
          <Route exact path="/stocks/:stickerName" component={DetailStockPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
