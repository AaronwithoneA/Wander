import {RECEIVE_REVIEWS, RECEIVE_SINGLE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';
const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_SINGLE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review});
    default:
      return state;
  }
};

export default reviewsReducer;
