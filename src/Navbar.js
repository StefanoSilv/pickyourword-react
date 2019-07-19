import React, {Component} from 'react';
import './Navbar.css';
import User from './User'
import axios from 'axios'


class Navbar extends Component {
	// Data
	state = {
		me : {
			points:0,
			level:'Guest',
			trophy: ['Guest']
		}
	}

	// Functions
	//redirect to Login page
	loginRedirect = () => {
		window.location.href = '/login'
	}

	//redirect to Signup page
	signupRedirect = () => {
		window.location.href = '/signup'
	}

	//take the info from the logged user
	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API}/api/me`, {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then( (res) => {
			let user = res.data
			console.log('res.data in the function' ,res.data);
			this.setState({me : user})
			console.log('user', this.state.me);
		}).catch( (err) => {
		console.log(err);
	})
}

	// Render
	render() {
		return (
			<div id="navbar" className="row">
				<div id="game-logo">Game logo</div>
				<div id="points-level" >
					<div id="points">{this.state.me.points}</div>
					<div id="level">{this.state.me.level.toUpperCase()}</div>
				</div>
				<div id="trophy">Last trophy</div>
				{ this.props.checkAuth() ? <User me={this.state.me} key={this.state.me._id}/> :
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
