import React from 'react';

// import FilterForm from './filter_form';
import DwellingIndex from '../dwelling/dwelling_index';
import Map from './../map/map';

const Search = ({ dwellings, minSeating, maxSeating, updateFilter }) => (
  <div className="search-results-page">
    <div className="left-search-page">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <DwellingIndex benches={benches} />
    </div>
    <div className="right-search-page">
      <BenchMap
        benches={benches}
        updateFilter={updateFilter}
        singleBench={false} />
    </div>

  </div>
);

export default Search;
