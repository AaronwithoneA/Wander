import {createBooking, fetchBookings} from '../../actions/booking_actions';
import {connect} from 'react-redux';
import BookingIndex from './booking_index';
import {selectBookings} from '../../reducers/selectors';

const mapStateToProps= state => ({
  bookings: selectBookings(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  fetchBookings: () => dispatch(fetchBookings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingIndex);
