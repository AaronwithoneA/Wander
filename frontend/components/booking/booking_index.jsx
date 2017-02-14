import React from 'react';
import {hashHistory} from 'react-router';

class BookingIndex extends React.Component {

  componentDidMount () {
    this.props.fetchBookings();
    this.imageLink = this.imageLink.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  imageLink (url) {
    return e => {
      e.preventDefault;
      hashHistory.push(url);
    };
  }

  handleDelete (id) {
    return e => {
      e.preventDefault;
      this.props.deleteBooking(id);
      this.props.fetchBookings();
    };
  }

  render () {
    const bookings =  <div>
                        <ul className="booking-index-container">
                        {this.props.bookings.map((booking, idx) =>(
                          <li className="booking-box"
                            key={idx}
                             onClick={this.imageLink(`/dwellings/${booking.dwelling_id}`)}>
                            <div className="booking-image-box">
                              <img
                                className="booking-image"
                                src={booking.dwellingImage}
                                ></img>

                              <div className="booking-host-image-box">
                                <img className ="booking-host-image"
                                src={booking.ownerImage}/>
                              </div>
                            </div>

                            <div className="booking-location">
                              {booking.dwellingLocation}
                            </div>

                            <div className="booking-info">

                              <h4 className="booking-title">
                                {booking.dwellingTitle}
                              </h4>
                              <div className="booking-dates-guest">
                                {booking.dates}
                              </div>
                              <div className="booking-dates-guest">
                                {booking.guest_number} guest(s)
                              </div>
                              <button
                                onClick={this.handleDelete(booking.id)}
                                className="delete-booking-button">Cancel Booking</button>
                            </div>
                          </li>
                        ))}
                        </ul>
                      </div>;

    return (this.props.bookings ? bookings : <div></div>);
  }
}

export default BookingIndex;
              //
              // {booking.start_date} -- {booking.end_date.toString()}
