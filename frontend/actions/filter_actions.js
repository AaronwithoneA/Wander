import {fetchSearchDwellings} from '../util/dwelling_api_util';

export const CHANGE_BOUNDS = "CHANGE_BOUNDS";
export const CHANGE_PRICE = "CHANGE_PRICE";
export const CHANGE_DATE = "CHANGE_DATE";

export const changeBounds = (bounds) => {
  return {
    type: CHANGE_BOUNDS,
    bounds,
  };
};

export const changePrice = (max, min) => {
  return {
    type: CHANGE_PRICE,
    max,
    min
  };
};

export const changeDate = (startDate, endDate) => {
  return {
    type: CHANGE_DATE,
    startDate,
    endDate,
  };
};

export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchSearchDwellings(getState().filters)(dispatch);
};

export const updatePrice = (maxPrice, minPrice) => (dispatch, getState) => {
  dispatch(changePrice(maxPrice, minPrice));
  return fetchSearchDwellings(getState().filters)(dispatch);
};

export const updateDate = (startDate, endDate) => (dispatch, getState) => {
    dispatch(changeDate(startDate, endDate));
    return fetchSearchDwellings(getState().filters)(dispatch);
};
