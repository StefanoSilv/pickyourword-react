import React, {Component} from 'react';
import './Answer.css';


class Answer extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="answer-box">
				<div class="input-group mb-3">
					<input type="text" class="form-control" placeholder="Pick your word" />
					<div id="confirm-button" class="input-group-append">
						<button class="btn btn-outline-secondary" type="button">Confirm!</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Answer;
