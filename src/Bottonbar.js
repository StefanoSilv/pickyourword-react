import React, {Component} from 'react';
import './Bottonbar.css';


class Bottonbar extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="bottonbar" className="row align-items-center">
				<div id="info" className="col-6">
					<p>App developed by Stefano Silvestrini</p>
					<p>Rules</p>
				</div>
				<div id="sharing" className="col-6">Sharing button</div>
			</div>
		)
	}
}

export default Bottonbar;
