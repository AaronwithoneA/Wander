import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import DwellingsReducer from './dwellings_reducer';
import ReviewsReducer from './reviews_reducer';
import BookingsReducer from './bookings_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  reviews: ReviewsReducer,
  dwellings: DwellingsReducer,
  bookings: BookingsReducer
});

export default rootReducer;
