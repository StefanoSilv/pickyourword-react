import React, {Component} from 'react';
import './Answer.css';
import axios from 'axios'


class Answer extends Component {
	// Data
	state = {
		text: ''
	}

	// Functions
	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	clearAnswer = () => {
		this.setState({
			text: ''
		})
	}




	// Render
	render() {
		return (
			<form onSubmit={(e) => {
					this.props.createAnswer(e, this.state.text);
					this.props.getPoints(e, this.state.text); this.clearAnswer()
					}}
					 id="answer-box">
				<div className="input-group mb-3">
					<input onChange={(e) => this.changeText(e)} value={this.state.text}
					 type="text" className="form-control"
					 placeholder="Pick your word" />
					<div id="confirm-button" className="input-group-append">
						<button className="btn btn-outline-secondary" type="submit">Confirm!</button>
					</div>
				</div>
			</form>
		)
	}
}

export default Answer;
