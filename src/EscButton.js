import React, {Component} from 'react';
import './EscButton.css';


class EscButton extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<button onClick={ () => this.props.escMode()} id="esc-button" type="button" className="btn btn-lg btn-danger btn-arrow-right">Esc</button>
		)
	}
}

export default EscButton;
