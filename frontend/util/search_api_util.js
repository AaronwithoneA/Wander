const fetchSearchLocations = (letters) => (
  $.ajax({
    method: "GET",
    url: "/api/search/locations",
    data: { letters },
  })
);

export default fetchSearchLocations;
