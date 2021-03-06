import React from 'react';
import { Link, withRouter } from 'react-router';
import LoginModal from '../login/login_modal';

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// componentDidUpdate() {
	// 	this.redirectIfLoggedIn();
	// }
	//
	// redirectIfLoggedIn() {
	// 	if (this.props.loggedIn) {
	// 		this.props.router.push("/");
	// 	}
	// }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.signup({user});
	}

	// navLink() {
	// 	if (this.props.formType === "login") {
	// 		return <Link to="/signup">Sign Up</Link>;
	// 	} else {
	// 		return <Link to="/login">Log In</Link>;
	// 	}
	// }

	renderErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li className="errors"key={`error-${i}`}>
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
					<br/>
					{this.renderErrors()}
					<div className="login-form">
						<br/>
						<label>
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>
						<br/>
						<label>
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value="Sign Up" className='form-button'/>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SignUpForm);
