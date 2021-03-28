import { combineReducers } from 'redux';
import stocks from './stocks';
import visibilityFilter from './visibilityFilter';
import stockDetail from './detailStock';

export default combineReducers({
  stocks,
  visibilityFilter,
  stockDetail,
});
