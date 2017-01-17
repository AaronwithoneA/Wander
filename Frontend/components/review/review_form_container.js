import {createReview} from '../../actions/booking_actions';
import {connect} from 'react-redux';
import ReviewForm from './booking_form';

const mapStateToProps= (state, ownProps) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createReview: booking => dispatch(createReview(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
