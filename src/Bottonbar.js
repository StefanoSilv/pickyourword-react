import React, {Component} from 'react';
import './Bottonbar.css';


class Bottonbar extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="bottonbar" class="row align-items-center">
				<div id="info" class="col-6">
					<p>App developed by Stefano Silvestrini</p>
					<p>Tortuga Coders</p>
					<p>Koh Samui, Thailand</p>
				</div>
				<div id="sharing" class="col-6">Sharing button</div>
			</div>
		)
	}
}

export default Bottonbar;
