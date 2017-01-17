export const fetchAllDwellings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/dwellings'
  })
);

export const fetchDwelling = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/dwellings/${id}`
  })
);

export const createDwelling = dwelling => (
  $.ajax({
    method: 'POST',
    url: 'api/dwellings',
    data: {dwelling}
  })
);

export const deleteDwelling = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/dwellings/${id}`,
  })
);
