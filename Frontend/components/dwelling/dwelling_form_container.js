import {createDwelling} from '../../actions/dwelling_actions';
import {connect} from 'react-redux';
import DwellingForm from './dwelling_form';

const mapStateToProps= state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createDwelling: dwelling => dispatch(createDwelling(dwelling))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DwellingForm);
