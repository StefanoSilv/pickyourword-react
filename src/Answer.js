import React, {Component} from 'react';
import './Answer.css';


class Answer extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="answer-box">
				<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Pick your word" />
					<div id="confirm-button" className="input-group-append">
						<button className="btn btn-outline-secondary" type="button">Confirm!</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Answer;
