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


  loggedOutButtons () {
    return (
      <nav className="header-right">
        <button className ="nav-button" onClick={this.handleSignUpButton}>Sign Up</button>
        <button className ="nav-button" onClick={this.handleLoginButton}>Log In</button>
      </nav>
    );
  }

  loggedInButtons () {
    return (
        <nav className="header-right">
          <button className="nav-button" onClick={this.props.logout}>Log Out</button>
        </nav>
    );
  }
  render () {
    return(
        this.props.currentUser ? this.loggedInButtons() : this.loggedOutButtons()

    );
  }
}

export default Header;
