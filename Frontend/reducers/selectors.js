export const selectDwelling = ({ dwellings }, id) => {
   const dwelling = dwellings[id] || {};
   return dwelling;
};
