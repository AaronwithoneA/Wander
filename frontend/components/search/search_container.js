
import { connect } from 'react-redux';

import {fetchSearchDwellings} from '../../actions/dwelling_actions';
import { updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => ({
  dwellings: asArray(state),
  minSeating: state.filters.minSeating,
  maxSeating: state.filters.maxSeating
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchSearchDwellings: filters => dispatch(fetchSearchDwellings(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
