import React, {Component} from 'react';
import './Question.css';
import axios from 'axios'


class Question extends Component {
	// Data
	state = {
		question : '',
		query: '' ,
		gameType: ''
	}

	// Functions

	componentWillMount(){
		//Construction the endpoint
		let endpoint = ''
		let alphabet= ['a','b','c','d','e','f','g','h','i','k','j','y','l','m',
			'n','o','p', 'r','s','t','u','v','z','w','q']

		let gameTypes = ['End-start'] //It will become an array of objects
		let gameType = gameTypes[Math.floor(Math.random() * gameTypes.length)]

		let x = alphabet[Math.floor(Math.random() * alphabet.length)]
		let y = alphabet[Math.floor(Math.random() * alphabet.length)]
		let questionMark = '?' //To avoid no question mark, can be avoided after the condition of existence of an answer
		let question_mark_number = Math.floor(Math.random() * 7)
		let between = questionMark.repeat(question_mark_number)
		//The final endpoint
		endpoint = `?sp=${x}?${between}${y}`
		//Word in the small box
		let query = endpoint.split('=')[1]
		//Question in the big box
		let question =  `${gameType}. Word that starts with ${x}, ends with ${y}, and has ${question_mark_number + 1} letter in the middle`


		axios.get(`https://api.datamuse.com/words${endpoint}`).then((res) => {
			this.setState({
				query : query
			})
			this.setState({
				question : question
			})
			//Send res.data to the data
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Render
	render() {
		return (
			<div>
				<div id="question-box">{this.state.question}</div>
				<div id="word-box">{this.state.query}</div>
			</div>
		)
	}
}

export default Question;
