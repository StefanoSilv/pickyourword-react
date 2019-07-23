import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import Bottonbar from './Bottonbar'
import Content from './Content'
import axios from 'axios'



class App extends Component {
	// Data
	state = {
		query:'',
		question:'',
		gameType:'',
		points: 0,
		streak: 0,
		endpoint:''
	}


	// Functions
	createAnswer = (e, text) => {
		e.preventDefault()
			this.getQuestion()
			console.log('points',this.state.points);
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
		console.log('user', user);
		this.setState({me : user})
	}).catch( (err) => {
	console.log(err);
})
}

//Function to get the trophies and their number, in an array
	getTrophies = () => {
			axios.get(`${process.env.REACT_APP_API}/api/trophies`, {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then( (res) => {
			let trophy = res.data.trophy
			this.setState({ trophy : trophy })
		}).catch( (err) => {
		console.log(err);
	})
}


//


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
		console.log('res', res);
	}).catch((err) => {
		console.log('err', err)
	})
}

removePoint = () => {
	let points = this.state.points
	if(points>0){
		this.setState({
			points: points - 1
		})
	}else{
		this.setState({
			points: 0
		})
	}

	this.setState({
		streak : 0
	})
}


	// Render
	render() {
		return (
			<div id="main-container" className="container-fluid h-100">
				<Navbar checkAuth={this.props.checkAuth} getQuestion={this.getQuestion}
				getLoggedUser={this.getLoggedUser} me={this.state.me}
				getTrophies={this.getTrophies}/>
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
