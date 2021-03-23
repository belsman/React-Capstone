import { combineReducers } from 'redux';
import stocks from './stocks';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  stocks,
  visibilityFilter,
});
