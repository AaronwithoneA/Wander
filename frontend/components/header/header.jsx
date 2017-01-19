import React from 'react';
import {Link, hashHistory} from 'react-router';



class Header extends React.Component {
  handleSignUpButton(e) {
    e.preventDefault();
    hashHistory.push("/signup");
  }

  handleLoginButton(e) {
    e.preventDefault();
    hashHistory.push("/login");
  }

  handleBecomeAHost(e) {
    e.preventDefault();
    hashHistory.push("/dwelling-form");
  }

  handleJourneys(e) {
    e.preventDefault();
    hashHistory.push("/bookings");
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    hashHistory.push("/");
  }

  handleLogo(e) {
    e.preventDefault();
    hashHistory.push("/");
  }


  loggedOutButtons () {
    return (
      <div className="header-box">
        <div>
          <img
            className="header-logo"
            src="https://res.cloudinary.com/dg8v2pvxf/image/upload/c_crop,h_1473/v1484790087/wander03_vs5vxa.jpg"
            onClick={this.handleLogo}/>
        </div>
        <nav className="header-right">
          <button className ="nav-button" onClick={this.handleSignUpButton}>Sign Up</button>
          <button className ="nav-button" onClick={this.handleLoginButton}>Log In</button>
        </nav>
      </div>
    );
  }

  loggedInButtons () {
    return (
      <div className="header-box">
        <div>
          <img
            className="header-logo"
            src="https://res.cloudinary.com/dg8v2pvxf/image/upload/c_crop,h_1473/v1484790087/wander03_vs5vxa.jpg"
            onClick={this.handleLogo}/>
        </div>
        <nav className="header-right">
          <button className="nav-button" onClick={this.handleJourneys}>Journeys</button>
          <button className="nav-button" onClick={this.handleBecomeAHost}>Become a Host</button>
          <button className="nav-button" onClick={this.props.logout}>Log Out</button>
        </nav>
      </div>

    );
  }
  render () {
    return(
      this.props.currentUser ? this.loggedInButtons() : this.loggedOutButtons()
    );
  }
}

export default Header;
