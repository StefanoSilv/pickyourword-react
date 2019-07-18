import React, {Component} from 'react';
import './User.css';




class User extends Component {
	// Data

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
							<li id="nickname-navbar">Nickname: randomnickname</li>
							<li>email: randomemail</li>
							<li>level: 10000000000</li>
							<li>points:100000000000</li>
							<li>Trophies:1000</li>
							<li>Subscription date: 15/09/2020</li>
							<li>Account: normal</li>
						</ul>
				</div>
			</div>
		)
	}
}

export default User;
