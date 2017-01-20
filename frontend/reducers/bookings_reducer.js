import {RECEIVE_BOOKINGS, RECEIVE_SINGLE_BOOKING, REMOVE_BOOKING}
from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_SINGLE_BOOKING:
      return merge({}, state, action.booking);
    case REMOVE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.booking.id];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
