import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import DwellingsReducer from './dwellings_reducer';
import ReviewsReducer from './reviews_reducer';
import BookingsReducer from './bookings_reducer';
import FiltersReducer from './filters_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  reviews: ReviewsReducer,
  dwellings: DwellingsReducer,
  bookings: BookingsReducer,
  filters: FiltersReducer,
  search: SearchReducer
});

export default rootReducer;
