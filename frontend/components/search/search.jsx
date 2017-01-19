import React from 'react';
import FilterForm from './filter_form';
import DwellingIndex from '../dwelling/dwelling_index';
import DwellingMap from './dwelling_map';

class Search extends React.Component {

  render () {
    console.log(this.props);
    return (
      <div className="dwelling-index-page">
        <div className="search-box">
          <FilterForm
            fetchSearchLocations={this.props.fetchSearchLocations}
            minPrice={this.props.minPrice}
            maxPrice={this.props.maxPrice}
            updateFilter={this.props.updateFilter} />
        </div>
        <div>
          <DwellingIndex dwellings={this.props.dwellings} />
        </div>
      </div>
    );
  }
}

export default Search;
