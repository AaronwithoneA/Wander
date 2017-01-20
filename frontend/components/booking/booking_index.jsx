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
      // hashHistory.push('/bookings2');
    };
  }
  // formatDate (d) {
  //   return (
  //     d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
  //     d.getHours() + ":" + d.getMinutes()
  //   );
  // }

  render () {
    const bookings =  <div>
                        <ul className="booking-index-container">

                        {this.props.bookings.map((booking, idx) =>(
                          <li className="booking-box"
                            key={idx}>
                            <img
                              className="booking-image"
                              src={booking.dwellingImage}
                              onClick={this.imageLink(`/dwellings/${booking.dwelling_id}`)}></img>
                            <div className="booking-info">
                              <div className="booking-location">
                                {booking.dwellingLocation}
                              </div>
                              <div className="booking-dates-guest">
                                {booking.start_date} -- {booking.end_date.toString()}
                              </div>
                              <div className="booking-dates-guest">
                                {booking.guest_number} guests
                              </div>
                              <h4 className="booking-title">
                                {booking.dwellingTitle}
                              </h4>
                              <button
                                onClick={this.handleDelete(booking.id)}
                                className="delete-booking-button">Cancel Booking</button>
                            </div>
                          </li>
                        ))}
                        </ul>
                      </div>;
    console.log(this.props);
    return (this.props.bookings ? bookings : <div></div>);
  }
}

export default BookingIndex;
