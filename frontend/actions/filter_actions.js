export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_PRICE = "UPDATE_PRICE";
export const UPDATE_DATE = "UPDATE_DATE";

export const updateBounds = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds,
  };
};

export const updatePrice = (max, min) => {
  return {
    type: UPDATE_PRICE,
    max,
    min
  };
};

export const updateDate = (startDate, endDate) => {
  return {
    type: UPDATE_DATE,
    startDate,
    endDate,
  };
};
