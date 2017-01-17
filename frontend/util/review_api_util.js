// export const fetchReviews = (dwellingId) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/reviews`,
//     data: {dwellingId}
//   });
// };

export const createReview= (review) => {
  return $.ajax({
    method: "POST",
    url: "api/reviews",
    data: { review },
  });
};
