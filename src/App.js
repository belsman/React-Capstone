import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import StocksList from './containers/StocksList';
import SearchResult from './containers/SearchResult';
import DetailStockPage from './components/DetailStockPage';
import Navbar from './containers/Navbar';

import './style.css';

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
          <Route exact path="/search" component={SearchResult} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
