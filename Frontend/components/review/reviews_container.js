import {connect} from 'react-redux';
import Reviews from './reviews';
import {fetchReviews, createReview} from '../../actions/review_actions';
import {selectReviews} from '../../reducers/selectors';

// const mapStateToProps = (state, ownProps) => ({
//   reviews: state.reviews
// });

const mapDispatchToProps = dispatch => ({
  createReview: review => (createReview(review))
});

export default connect(
  null,
  mapDispatchToProps
)(Reviews);
