import { connect } from 'react-redux';

import {fetchSearchDwellings} from '../../actions/dwelling_actions';
import {updateFilter} from '../../actions/filter_actions';
import { asDwellingsArray } from '../../reducers/selectors';
import Search from './search';

const mapStateToProps = state => ({
  dwellings: asDwellingsArray(state),
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
