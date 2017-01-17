import {createBooking} from '../../actions/booking_actions';
import {connect} from 'react-redux';
import BookingForm from './booking_form';

const mapStateToProps= (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
