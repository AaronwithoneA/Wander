import React from 'react';
import {hashHistory} from 'react-router';

class DwellingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.imageLink = this.imageLink.bind(this);
  }

  imageLink (e) {
    e.preventDefault;
    hashHistory.push(`/dwellings/${this.props.dwelling.id}`);
  }

  render () {
    return (
      <li className="dwelling-box"onClick={this.imageLink}>
        <img
          className="dwelling-index-image"
          src={this.props.dwelling.image_url}/>
        <div className="dwelling-index-info">
          <div className="dwelling-index-price-location-box">
            <div className="dwelling-index-price">${this.props.dwelling.price}</div>
            <div className="dwelling-index-location">{this.props.dwelling.location}</div>
          </div>
      </div>

      </li>

    );
  }
}

export default DwellingIndexItem;
