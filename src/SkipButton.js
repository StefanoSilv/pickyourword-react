import React, {Component} from 'react';
import './SkipButton.css';


class SkipButton extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<button onClick={() => { this.props.getQuestion();
				this.props.removePoint()
			}} id="skip-button" type="button"
			className="btn btn-lg btn-outline-dark btn-arrow-right">Skip</button>
		)
	}
}

export default SkipButton;
