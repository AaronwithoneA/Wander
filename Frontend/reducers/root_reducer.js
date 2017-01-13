import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import DwellingsReducer from './dwellings_reducer';
import DwellingReducer from './dwelling_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  // dwellings: DwellingsReducer,
  dwelling: DwellingReducer
});

export default rootReducer;
