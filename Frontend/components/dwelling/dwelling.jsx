import React from 'react';
import ReviewsContainer from '../review/reviews_container';
import BookingFormContainer from '../booking/booking_form_container';

class Dwelling extends React.Component {

  componentDidMount () {
    this.props.fetchDwelling(this.props.dwellingId);
  }

  render () {
    const reviews = this.props.dwelling.reviews ? <ReviewsContainer dwelling={this.props.dwelling}/> : "";
    return (
      <div className="dwelling-page">
        <div className="dwelling-image">
          <img src={this.props.dwelling.image_url}></img>
        </div>
        <div className="dwelling-info">
          <div className="dwelling-details">
            <div className="dwelling-details-info">
              <div className="top-info">
                <div className="top-host-info">
                  <div className="host-thumbnail">
                    <img src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484361641/harry_adsj4h.jpg"/>
                  </div>
                  <div>
                    {this.props.dwelling.owner_name}
                  </div>
                </div>
                <div className="top-dwelling-info">
                  <div className="dwelling-title">
                    {this.props.dwelling.title}
                  </div>
                  <div className="location-and-ratings">
                    <div>
                      {this.props.dwelling.location}
                    </div>
                    <div className="ratings">
                       * * * * *
                    </div>
                  </div>
                  <div className="types">
                    <div className="feature">
                      <img src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359475/house_icon_ump9sj.png"/>
                      {this.props.dwelling.description}
                    </div>
                    <div className="type">
                      <img src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/guests_icon_grdlus.png" />
                      {this.props.dwelling.guest_limit} Guests
                    </div>
                    <div className="type">
                      <div>
                        <img src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/bedrooms_icon_mepwzj.png" />
                      </div>
                      <div>
                        {this.props.dwelling.bedrooms} Bedrooms
                      </div>
                    </div>
                    <div className="type">
                      <img src="http://res.cloudinary.com/dg8v2pvxf/image/upload/v1484359474/beds_icon_hvuhci.png" />
                      {this.props.dwelling.beds} Beds
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-this-listing">
                <h3 className="the-magic">The magic</h3>
                <div className="magic-content">
                  {this.props.dwelling.about_this}
                </div>
              </div>
              <div className="extra-dwelling-section">
                <h3 className="extra-dwelling-section-title">House Rules</h3>
                <div className="extra-dwelling-section-content">
                  {this.props.dwelling.house_rules}
                </div>
              </div>
            </div>
            <div className="review-container">
              {reviews}
            </div>
          </div>
          <BookingFormContainer dwellingId={this.props.dwellingId} dwelling={this.props.dwelling}/>
        </div>
      </div>
    );
  }
}


export default Dwelling;
