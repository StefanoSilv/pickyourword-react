import React, {Component} from 'react';
import './Question.css';
import axios from 'axios'


class Question extends Component {
	// Data
	state = {
		query:'',
		question:''
	}

	// Functions

	componentWillReceiveProps(props){
		this.setState({
			query : props.query
		})
		this.setState({
			question : props.question
		})
	}

	// Render
	render() {
		return (
			<div>
				<div id="loader" className="loader"></div>
				<div id="question-box">{this.state.question}</div>
				<div id="word-box">{this.state.query.split('?').join(' _ ')}</div>
			</div>
		)
	}
}

export default Question;
