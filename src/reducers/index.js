import { combineReducers } from 'redux';
import stocks from './stocks';
import visibilityFilter from './visibilityFilter';
import stockDetail from './detailStock';
import searchResult from './search';

export default combineReducers({
  stocks,
  visibilityFilter,
  stockDetail,
  searchResult,
});
