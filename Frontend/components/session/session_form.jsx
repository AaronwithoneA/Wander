
import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
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

  render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
          <div className= "title">
            Wander
          </div>
          <br />
					<div className="login-signup-statement">Please {this.props.formType}</div>
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
						<input className="form-button" type="submit" value="Alohomora!" />
					</div>
          <button className ="form-button" onClick={this.handleGuest}>Demo</button>
          {this.navLink()}
				</form>
			</div>
		);
	}


}

export default withRouter(SessionForm);
