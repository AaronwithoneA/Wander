import * as APIUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_SINGLE_BOOKING = "RECEIVE_SINGLE_BOOKING";

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveSingleBooking = booking => ({
  type: RECEIVE_SINGLE_BOOKING,
  booking
});

export const removeBooking = booking => ({
  type: REMOVE_BOOKING,
  booking
});

export const fetchBookings = () => dispatch => (
  APIUtil.fetchBookings()
  .then(bookings => dispatch(receiveBookings(bookings)))
);

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking)
  .then(booking1 => dispatch(receiveSingleBooking(booking1)))
);

export const deleteBooking = id => dispatch => (
  APIUtil.deleteBooking(id)
  .then(booking => dispatch(removeBooking(booking)))
);
