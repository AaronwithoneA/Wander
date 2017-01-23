// import {UPDATE_PRICE, UPDATE_DATE, UPDATE_BOUNDS}
// from '../actions/filter_actions';
// import merge from 'lodash/merge';
//
// const defaultState = {
//   max_price: 500,
//   min_price: 0,
//   // start_date: "7/23/1984",
//   // end_date: "7/23/1984",
//   bounds: {}
// };
//
// const filtersReducer = (state = defaultState, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case UPDATE_PRICE:
//       return merge({}, state, {max_price: action.max, min_price: action.min});
//     case UPDATE_DATE:
//       return merge({}, state, {start_date: action.startDate, end_date: action.startDate});
//     case UPDATE_BOUNDS:
//       return merge({}, state, {bounds: action.bounds});
//     default:
//       return state;
//   }
// };
//
//
// export default filtersReducer;

import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {},
  minPrice: 0,
  maxPrice: 500,
  letters: ""
});

const FiltersReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FiltersReducer;
