import React, {Component} from 'react';
import './Navbar.css';
import User from './User'


class Navbar extends Component {
	// Data

	// Functions
	//redirect to Login page
	loginRedirect = () => {
		window.location.href = '/login'
	}

	//redirect to Signup page
	signupRedirect = () => {
		window.location.href = '/signup'
	}

	// Render
	render() {
		return (
			<div id="navbar" className="row">
				<div id="game-logo">Game logo</div>
				<div id="points-level">Points & level</div>
				<div id="trophy">Last trophy</div>
				{ this.props.checkAuth() ? <User /> :
					<div id="user-navbar">
						<div id="logged-in">
							<small>Do you have an account?</small>
							<p onClick={() => this.loginRedirect()}>Log-in</p>
							<small>Otherwise... </small><span onClick={() => this.signupRedirect()}>Sign-up</span>
						</div>
					</div>
				}
			</div>

		)
	}
}

export default Navbar;
