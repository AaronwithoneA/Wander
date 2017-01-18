import * as APIUtil from '../util/dwelling_api_util';

export const RECEIVE_ALL_DWELLINGS = "RECEIVE_ALL_DWELLINGS";
export const RECEIVE_SINGLE_DWELLING = "RECEIVE_SINGLE_DWELLING";
export const REMOVE_DWELLING = "REMOVE_DWELLING";

export const receiveAllDwellings = dwellings => ({
  type: RECEIVE_ALL_DWELLINGS,
  dwellings
});

export const receiveSingleDwelling = dwelling => ({
  type: RECEIVE_SINGLE_DWELLING,
  dwelling
});

export const removeDwelling = dwelling => ({
  type: REMOVE_DWELLING,
  dwelling
});

export const fetchAllDwellings = () => dispatch => (
  APIUtil.fetchAllDwellings()
  .then(dwellings => dispatch(receiveAllDwellings(dwellings)))
);

export const fetchDwelling = id => dispatch => (
  APIUtil.fetchDwelling(id)
  .then(dwelling => dispatch(receiveSingleDwelling(dwelling)))
);

export const createDwelling = dwelling => dispatch => (
  APIUtil.createDwelling(dwelling)
  .then(dwelling1 => dispatch(receiveSingleDwelling(dwelling1)))
);

export const deleteDwelling = id => dispatch => (
  APIUtil.deleteDwelling(id)
  .then(dwelling => dispatch(removeDwelling(dwelling)))
);

export const fetchSearchDwellings = filters => dispatch => {
  return (
  APIUtil.fetchSearchDwellings(filters)
    .then((dwellings) => dispatch(receiveAllDwellings(dwellings)))
  );
};
