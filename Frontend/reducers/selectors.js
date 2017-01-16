export const selectDwelling = ({ dwellings }, id) => {
   const dwelling = dwellings[id] || {};
   return dwelling;
};

export const selectReviews = (state) => {
  const keys = Object.keys(state.reviews);
  const revs = [];
  keys.forEach((key) => {
    revs.push(state.reviews[key]);
  });
  return revs;
};
