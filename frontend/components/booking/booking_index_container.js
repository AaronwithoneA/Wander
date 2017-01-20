import {createBooking, fetchBookings, deleteBooking} from '../../actions/booking_actions';
import {connect} from 'react-redux';
import BookingIndex from './booking_index';
import {selectBookings} from '../../reducers/selectors';

const mapStateToProps= state => ({
  bookings: selectBookings(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  deleteBooking: id => dispatch(deleteBooking(id)),
  fetchBookings: () => dispatch(fetchBookings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
