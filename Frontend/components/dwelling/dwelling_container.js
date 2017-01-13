import Dwelling from './dwelling';
import {connect} from 'react-redux';
import {fetchDwelling} from '../../actions/dwelling_actions';

const mapStateToProps = (state, ownProps) => ({
  dwelling: state.dwellings[ownProps.params.id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchDwelling: id => dispatch(fetchDwelling(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Dwelling);
