import { RECEIVE_LOCATIONS } from '../actions/search_actions';

const searchReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATIONS:
      return action.locations;
    default:
      return state;
  }
};

export default searchReducer;
