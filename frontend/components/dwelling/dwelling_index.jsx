import React from 'react';
import DwellingIndexItem from './dwelling_index_item';

class DwellingIndex extends React.Component {

   render () {
     console.log(this.props);
    return (
      <div>
        <ul className="dwelling-index-container">
        {this.props.dwellings.map(dwelling => (
          <DwellingIndexItem dwelling={dwelling} key={dwelling.id} />
        ))}
      </ul>
      </div>
    );
  }
}

export default DwellingIndex;
