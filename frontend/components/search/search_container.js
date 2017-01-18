
import { connect } from 'react-redux';

import {fetchSearchDwellings} from '../../actions/dwelling_actions';
import { updateFilter, updateBounds, updatePrice, updateDate } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = state => ({
  dwellings: asArray(state),
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
