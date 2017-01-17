import {createReview} from '../../actions/review_actions';
import {connect} from 'react-redux';
import ReviewForm from './review_form';


const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);
