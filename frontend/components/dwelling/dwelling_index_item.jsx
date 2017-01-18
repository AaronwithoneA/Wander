import React from 'react';

class DwellingIndexItem extends React.Component {

  render () {
    return (
      <li className="dwelling-box">
          <img className="dwelling-index-image" src={this.props.dwelling.image_url}></img>
          <div className="dwelling-index-info">
            <div className="dwelling-index-price-location-box"></div>
            <div className="dwelling-index-price">{this.props.dwelling.price}</div>
            <div className="dwelling-index-location">{this.props.dwelling.location}</div>
          </div>

      </li>

    );
  }
}

export default DwellingIndexItem;
