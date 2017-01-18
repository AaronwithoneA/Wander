import {RECEIVE_ALL_DWELLINGS, RECEIVE_SINGLE_DWELLING, REMOVE_DWELLING}
from '../actions/dwelling_actions';
import {RECEIVE_SINGLE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const dwellingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_DWELLINGS:
      return action.dwellings;
    case RECEIVE_SINGLE_DWELLING:
      return merge({}, state, action.dwelling);
    case RECEIVE_SINGLE_REVIEW:
    console.log(action);
      const newState = merge({}, state);
        newState[action.review.dwelling_id].reviews =
          [ ...state[action.review.dwelling_id].reviews, action.review];
      return newState;
    default:
      return state;
  }
};

export default dwellingsReducer;
