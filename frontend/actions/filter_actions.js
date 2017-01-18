import {fetchSearchDwellings} from '../actions/dwelling_actions';

// export const CHANGE_BOUNDS = "CHANGE_BOUNDS";
// export const CHANGE_PRICE = "CHANGE_PRICE";
// export const CHANGE_DATE = "CHANGE_DATE";
//
// export const changeBounds = (bounds) => {
//   return {
//     type: CHANGE_BOUNDS,
//     bounds,
//   };
// };
//
// export const changePrice = (max, min) => {
//   return {
//     type: CHANGE_PRICE,
//     max,
//     min
//   };
// };
//
// export const changeDate = (startDate, endDate) => {
//   return {
//     type: CHANGE_DATE,
//     startDate,
//     endDate,
//   };
// };
//
// export const updateBounds = (bounds) => (dispatch, getState) => {
//   dispatch(changeBounds(bounds));
//   return fetchSearchDwellings(getState().filters)(dispatch);
// };
//
// export const updatePrice = (maxPrice, minPrice) => (dispatch, getState) => {
//   dispatch(changePrice(maxPrice, minPrice));
//   return fetchSearchDwellings(getState().filters)(dispatch);
// };
//
// export const updateDate = (startDate, endDate) => (dispatch, getState) => {
//     dispatch(changeDate(startDate, endDate));
//     return fetchSearchDwellings(getState().filters)(dispatch);
// };


export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchSearchDwellings(getState().filters)(dispatch);
};

// export const updateFilter = (filter, value) => (dispatch, getState) => (
//   dispatch(changeFilter(filter, value)).then(
//     filter1 => dispatch(fetchSearchDwellings(filter1)))
// );

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
