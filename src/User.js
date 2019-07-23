import React, {Component} from 'react';
import './User.css';
import Logout from './Logout'




class User extends Component {
	// Data
	state = {
		me : this.props.me
	}

	// Functions
dropdownMenu = () => {
var x = document.getElementById("user-unordered-list")
	if (x.className.indexOf("show") == -1) {
	x.className += "show";
	} else {
	x.className = x.className.replace("show", "")
	}
}

	// Render
	render() {
		return (
			<div id="user-navbar">
				<div id="logged-in">
					<button id="get-premium" type="button" className="btn btn-outline-warning">Get Premium</button>
					<p id="user-account" onClick={() => this.dropdownMenu()}>Your account</p>
						<ul id="user-unordered-list">
							<li id="nickname-navbar">Nickname: {this.state.me.name}</li>
							<li>email: {this.state.me.email}</li>
							<li>level: {this.state.me.level}</li>
							<li>points: {this.state.me.points}</li>
							<li>Trophies: {this.state.me.trophy}</li>
							<li>Subscription date: {this.state.me.iscription_date}</li>
							<li>Account: {this.state.me.user_type}</li>
							<li><Logout /></li>
						</ul>
				</div>
			</div>
		)
	}
}

export default User;
