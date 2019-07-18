import React, {Component} from 'react';
import './Navbar.css';
import User from './User'


class Navbar extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="navbar" class="row">
				<div id="game-logo">Game logo</div>
				<div id="points-level">Points & level</div>
				<div id="trophy">Last trophy</div>
				<User />
			</div>

		)
	}
}

export default Navbar;
