import React from 'react';
import DwellingIndexItem from './dwelling_index_item';

class DwellingIndex extends React.Component {

  constructor (props) {
    super(props);
    this.searchResults = this.searchResults.bind(this);
  }

   searchResults () {
    if(this.props.dwellings.length > 0) {
      return (
        <div>
          <ul className="dwelling-index-container">
          {this.props.dwellings.map(dwelling => (
            <DwellingIndexItem dwelling={dwelling} key={dwelling.id} />
          ))}
        </ul>
        </div>
      );
    } else {
      return (
        <div className = "empty-search">
          Your search didn't produce any magic. Try wandering elsewhere.
        </div>
      );
    }
   }

   render () {
    return (
      this.searchResults()
    );
  }
}

export default DwellingIndex;
