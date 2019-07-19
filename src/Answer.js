import React, {Component} from 'react';
import './Answer.css';
import axios from 'axios'


class Answer extends Component {
	// Data
	state = {
		text : ''
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

	createAnswer = (e, text) => {
		console.log('Hello');
		e.preventDefault()
		axios.post(
			`${process.env.REACT_APP_API}/api/checkAnswer`,
			text,
			{headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}}
		).then((res) => {
			console.log('answer', res);
			let answer: text
			this.setState({
				text: answer
			})
			console.log('res.data',res.data)

		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Render
	render() {
		return (
			<form onSubmit={(e) => {
					this.createAnswer(e, this.state.text); this.clearAnswer()}
				} id="answer-box">
				<div className="input-group mb-3">
					<input onChange={(e) => this.changeText(e)} value={this.state.text}
					 type="text" className="form-control"
					 placeholder="Pick your word" />
					<div id="confirm-button" className="input-group-append">
						<button className="btn btn-outline-secondary" type="button">Confirm!</button>
					</div>
				</div>
			</form>
		)
	}
}

export default Answer;
