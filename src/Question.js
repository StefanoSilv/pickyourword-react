import React, {Component} from 'react';
import './Question.css';
import axios from 'axios'


class Question extends Component {
	// Data
	state = {
		question : '',
		query: ''
	}

	// Functions

	componentWillMount(){
		//Construction the endpoint
		let endpoint = ''
		let alphabet= ['a','b','c','d','e','f','g','h','i','k','j','y','l','m',
			'n','o','p', 'r','s','t','u','v','z','w','q']

		let gameTypes = ['end-start']
		let gameType = gameTypes[Math.floor(Math.random() * gameTypes.length)]

		let x = alphabet[Math.floor(Math.random() * alphabet.length)]
		let y = alphabet[Math.floor(Math.random() * alphabet.length)]
		let questionMark = '?'
		let between = questionMark.repeat(Math.floor(Math.random() * 7))
		//The final endpoint
		endpoint = `?sp=${x}?${between}${y}`
		let query = endpoint.split('=')[1]

		axios.get(`https://api.datamuse.com/words${endpoint}`).then((res) => {
			this.setState({
				question : res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Render
	render() {
		return (
			<div>
				<div id="question-box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				</div>
				<div id="word-box">CALIMNANDJSDASJKLALSALSHKA</div>
			</div>
		)
	}
}

export default Question;
