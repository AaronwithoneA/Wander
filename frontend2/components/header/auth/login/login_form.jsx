import React from 'react';
import { Link, withRouter } from 'react-router';
import LoginFormContainer from './login_form_container';


class LoginForm extends React.Component {
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
		this.props.login(user);
	}

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
					<h1></h1>
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
						<input type="submit" value="Log In" className = 'form-button'/>
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(LoginForm);
