import React from 'react';
import {hashHistory} from 'react-router';

class BookingForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
    start_date: "",
    end_date: "",
    guest_number: "",
    dwelling_id: this.props.dwellingId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.days= this.days.bind(this);
    this.subTotal= this.subTotal.bind(this);
    this.total= this.total.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const booking = Object.assign({}, this.state);
    this.props.createBooking(booking);
    hashHistory.push(`/bookings`);
  }

  days() {
  if (this.state.end_date !== "") {
    return (new Date(this.state.end_date) - new Date(this.state.start_date))/86400000;
  } else {
    return 0;
  }
}

subTotal() {
  if (this.state.end_date !== "") {
    return this.days() * parseInt(this.props.dwelling.price);
  } else {
    return 0;
  }
}

total() {
  if (this.state.end_date !== "") {
    return this.subTotal() + 20;
  } else {
    return 0;
  }
}

  render () {
    return (
      <div className="booking-form-container" >
        <div className="booking-form-box">
          <div className="booking-form-top">
            <div className="price-statement">
              <div>${this.props.dwelling.price}</div>
            </div>
            <div className="per-night-statement">
              <div>Per Night</div>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className="booking-form">
            <div className="booking-form-dates">
              <div className="booking-date-box" >
                <h3>Check-in</h3>
                  <input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    value={this.state.start_date}
                    onChange={this.update("start_date")}
                    className="booking-date-input"/>
              </div>
              <div className="booking-date-box" >
                <h3>Check-out</h3>
                  <input
                    type="date"
                    placeholder="mm/dd/yyyy"
                    value={this.state.end_date}
                    min={this.state.start_date}
                    onChange={this.update("end_date")}
                    className="booking-date-input"/>
              </div>
            </div>
            <div className="booking-guest-box">
              <h3>Number of guests</h3>
              <input
                type="text"
                value={this.state.guest_number}
                onChange={this.update("guest_number")}
                className="booking-guest-input"/>
            </div>
            <div className="booking-fees">
              <div>${this.props.dwelling.price} x {this.days()} nights</div>
              <div>${this.subTotal()}</div>
            </div>
            <div className="booking-fees">
              <div>Cleaning Fee</div>
              <div>$20</div>
            </div>
            <div className="booking-fees">
              <div>Total</div>
              <div>{this.total()}</div>
            </div>
            <div className="booking-form-button-container">
              <input
                className="booking-form-button"
                type="submit"
                value="wingardium leviosa!" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default BookingForm;
