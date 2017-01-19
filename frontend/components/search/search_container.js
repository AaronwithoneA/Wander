import { connect } from 'react-redux';

import {fetchSearchDwellings} from '../../actions/dwelling_actions';
import {updateFilter} from '../../actions/filter_actions';
import { asDwellingsArray } from '../../reducers/selectors';
import { fetchSearchLocations } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
  dwellings: asDwellingsArray(state),
  minPrice: state.filters.minPrice,
  maxPrice: state.filters.maxPrice,
  locations: state.locations,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchSearchLocations: (letters) => (dispatch(fetchSearchLocations(letters))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
