export const selectDwelling = ({ dwellings }, id) => {
   const dwelling = dwellings[id] || {};
   return dwelling;
};

export const selectReviews = state => {
  const keys = Object.keys(state.reviews);
  const revs = [];
  keys.forEach((key) => {
    revs.push(state.reviews[key]);
  });
  return revs;
};

export const selectBookings = state => {
  const keys = Object.keys(state.bookings);
  const bookings = [];
  keys.forEach((key) => {
    bookings.push(state.bookings[key]);
  });
  return bookings;
};

export const asDwellingsArray = ({ dwellings }) =>(
  Object.keys(dwellings).map(key => dwellings[key])
);
