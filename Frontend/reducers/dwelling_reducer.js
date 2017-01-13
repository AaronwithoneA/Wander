import {RECEIVE_SINGLE_DWELLING}
from '../actions/dwelling_actions';
import merge from 'lodash/merge';

const dwellingReducer = (state = {dwelling: ""}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_DWELLING:
      return action.dwelling;
    default:
      return state;
  }
};

export default dwellingReducer;
