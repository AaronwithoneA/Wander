import React from 'react';
import {hashHistory} from 'react-router';

class DwellingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.imageLink = this.imageLink.bind(this);
    this.rating = this.rating.bind(this);
  }

  imageLink (e) {
    e.preventDefault;
    hashHistory.push(`/dwellings/${this.props.dwelling.id}`);
  }

  rating () {
    const stars = [];
    for (var i = 0; i < parseInt(this.props.dwelling.rating); i++) {
      stars.push(
        <img key={i} className="index-stars" src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/star-icon_cqaeqo.png"/>
      );
    }
    return stars;
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
          <div className="index-rating">
            {this.rating().map((star => star))}
          </div>
      </div>

      </li>

    );
  }
}

export default DwellingIndexItem;
