import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import Bottonbar from './Bottonbar'
import Content from './Content'
import axios from 'axios'
import getTrophy from './getTrophy.js'



class App extends Component {
	// Data
	state = {
		query:'',
		question:'',
		gameType:'',
		streak: 0,
		endpoint:'',
		me : {
			points:0,
			level: 'Guest',
			trophy:''
		},
		trophy : {
			name: 'beginner',
			pic:'https://res.cloudinary.com/do8qdtgy8/image/upload/v1563681086/pickyourword/beginner_level_xscg9p.jpg',
			number: 0
		}
	}


	// Functions
	createAnswer = (e, text) => {
		e.preventDefault()
			this.getQuestion()
	}

	getQuestion = () => {
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
		if(res.data && res.data.length){
			this.setState({
				gameType : gameType
			})

			this.setState({
				query : query
			})

			this.setState({
				question : question
			})
			this.setState({
				endpoint : endpoint
			})
		}else{
			this.getQuestion()
		}
			//Send res.data to the data
		}).catch((err) => {
			console.log('err', err)
		})
	}

	//Function to get the logged User

	getLoggedUser = () => {
		axios.get(`${process.env.REACT_APP_API}/api/me`, {headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}}).then( (res) => {
		let user = res.data
		this.setState({me : user})
	}).catch( (err) => {
	console.log(err);
})
}

getPoints = (e, answer) => {
	this.createAnswer(e, answer)
	let gameType = this.state.gameType
	let streak = this.state.streak
	let endpoint = this.state.endpoint
	axios.post(`${process.env.REACT_APP_API}/api/checkAnswer`,
	{
		gameType: gameType,
		streak: streak,
		answer: answer,
		endpoint: endpoint
	},
	{headers: {
		Authorization: `Bearer ${localStorage.getItem('token')}`
	}}).then( (res) => {
		console.log('hello');
		console.log('res', res);
		this.getTrophy()
	}).catch((err) => {
		console.log('err', err)
	})
}

streakToZero = () => {
	this.setState({
		streak : 0
	})
}

removePoint = () => {
	let points = this.state.me.points
	if(points > 0){
		this.setState({
			points: points - 1
		})
	}else{
		this.setState({
			points: 0
		})
	}
	this.streakToZero()
}




	// Render
	render() {
		return (
			<div id="main-container" className="container-fluid h-100">
				<Navbar checkAuth={this.props.checkAuth} getQuestion={this.getQuestion}
				getLoggedUser={this.getLoggedUser} me={this.state.me}
				trophy={this.state.trophy}/>
				<Content createAnswer={this.createAnswer} getLoggedUser={this.getLoggedUser}
				checkAuth={this.props.checkAuth} getQuestion={this.getQuestion}
				query={this.state.query} question={this.state.question}
				text={this.state.text} getPoints={this.getPoints} />
				<Bottonbar />
			</div>
		)
	}
}

export default App;
