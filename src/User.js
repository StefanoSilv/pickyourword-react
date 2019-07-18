import React, {Component} from 'react';
import './User.css';




class User extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="user-navbar">
				<div id="logged-in">
					<button id="get-premium" type="button" class="btn btn-outline-warning">Get Premium</button>
					<p id="user-account">Your account</p>
						<ul>
							<li>Nickname: randomnickname</li>
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
