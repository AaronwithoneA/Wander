import {RECEIVE_ALL_DWELLINGS, RECEIVE_SINGLE_DWELLING, REMOVE_DWELLING}
from '../actions/dwelling_actions';
import merge from 'lodash/merge';

const dwellingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_DWELLINGS:
      return action.dwellings;
    case RECEIVE_SINGLE_DWELLING:
    const newDwelling = {[action.dwelling.id]: action.dwelling};
    return merge({}, state, newDwelling);
    default:
      return state;
  }
};

export default dwellingsReducer;
