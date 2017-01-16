import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_SINGLE_REVIEW = "RECEIVE_SINGLE_REVIEW";

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveSingleReview = (review) => ({
  type: RECEIVE_SINGLE_REVIEW,
  review
});

export const fetchReviews = id => dispatch => (
  APIUtil.fetchReviews(id)
  .then(reviews => dispatch(receiveReviews(reviews)))
);


export const createReview = (review) => dispatch => (
  APIUtil.createReview(review)
  .then(review1 => dispatch(receiveSingleReview(review)))
);
