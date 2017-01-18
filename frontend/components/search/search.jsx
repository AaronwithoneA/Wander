import React from 'react';
import FilterForm from './filter_form';
import DwellingIndex from '../dwelling/dwelling_index';
import DwellingMap from './../map/map';

const Search = ({ dwellings, minPrice, maxPrice, updateFilter }) => (
  <div className="search-results-page">
    <div className="left-search-page">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <DwellingIndex dwellings={dwellings} />
    </div>
    <div className="right-search-page">
      <DwellingMap
        dwellings={dwellings}
        updateFilter={updateFilter}
         />
    </div>

  </div>
);

export default Search;
