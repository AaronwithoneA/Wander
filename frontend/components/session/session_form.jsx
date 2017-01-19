
import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import Home from '../home/home';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        image_url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.handleSignUpButton = this.handleSignUpButton.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  clearErrors() {
    this.props.clearSessionErrors();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleGuest(e) {
    e.preventDefault();
    const user = {
        email: "harry",
        password: "1234567"
      };
    this.props.login(user);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user);
    this.props.processForm(user);

  }

  handleSignUpButton(e) {
    e.preventDefault();
    hashHistory.push("/signup");
    this.clearErrors();
  }

  handleLoginButton(e) {
    e.preventDefault();
    hashHistory.push("/login");
    this.clearErrors();
  }

  navLink() {
    if (this.props.formType === "login") {
      return (
      <div className="redirect-box">
        <div className="redirect-statement">Don't have an account?</div>
        <button className ="redirect-button" onClick={this.handleSignUpButton}>Sign Up</button>
      </div>
    );
      // return <Link className="redirect-button"to="/signup">Sign Up</Link>;
    } else {
        return (
        <div className="redirect-box">
          <div className="redirect-statement">Already have a Wander account?</div>
          <button className ="redirect-button"onClick={this.handleLoginButton}>Log In</button>
        </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handlePhoto(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      {
        cloud_name: 'dg8v2pvxf',
        upload_preset: 'iqrrljqa',
        theme: 'minimal'
      },
      (errors, coverInfo) => {
        if (errors === null) {
          let cover_info = coverInfo[0].url;
          this.setState({image_url: cover_info});
        }
      }
    );
  }

  render() {
		return (
      <div>
        <div className="login-background"></div>
  			<div className="login-form-container">
  				<form onSubmit={this.handleSubmit} className="login-form-box">

              <img
                className="form-logo"
                src="https://res.cloudinary.com/dg8v2pvxf/image/upload/c_crop,h_1473/v1484790087/wander03_vs5vxa.jpg"
                />

              <br />
            <div className="errors">
              {this.renderErrors()}
            </div>
  					<div className="login-form">
  						<label>
  							<input type="text"
  								value={this.state.email}
                  placeholder="Email"
  								onChange={this.update("email")}
  								className="login-input" />
  						</label>
  						<label>
  							<input type="password"
  								value={this.state.password}
                  placeholder="Password"
  								onChange={this.update("password")}
  								className="login-input" />
  						</label>
              <button className="profile-photo-button"onClick={this.handlePhoto}>Upload profile photo</button>
  						<input className="form-button" type="submit" value="Alohomora!" />
  					</div>
            <button className ="form-button" onClick={this.handleGuest}>Demo</button>
            {this.navLink()}
  				</form>
  			</div>
        <div className="home-container">
          <Home />
        </div>

      </div>
		);
	}


}

export default withRouter(SessionForm);
