const visibilityFilter = (state = 'activeStocks', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default visibilityFilter;
