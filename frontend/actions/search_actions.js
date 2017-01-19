import fetchSearchLocationsUtil from '../util/search_api_util';
import {fetchSearchDwellings} from './dwelling_actions';
export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";


export const receiveLocations = (locations) => (
  {
    type: RECEIVE_LOCATIONS,
    locations
  }
);

export const fetchSearchLocations = letters => dispatch => (
    fetchSearchLocationsUtil(letters)
      .then(locations => dispatch(receiveLocations(locations)))
    );
