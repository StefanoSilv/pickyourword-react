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
		endpoint:'',
		me : {
			points:0,
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
		this.setState({me : res.data})
		this.setState({trophy: getTrophy(this.state.me.points)})
	}).catch( (err) => {
	console.log(err);
})
}

getPoints = (e, answer) => {
	this.createAnswer(e, answer)
	let gameType = this.state.gameType
	let endpoint = this.state.endpoint
	if(localStorage.getItem('token') && localStorage.getItem('token').length){
		axios.post(`${process.env.REACT_APP_API}/api/checkAnswer`,
		{
			gameType: gameType,
			answer: answer,
			endpoint: endpoint
		},
		{headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then( (res) => {
			this.setState({
				me : res.data
			})
			this.setState({
				trophy: getTrophy(this.state.me.points)
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}else{
		console.log('Answer');
		axios.post(`${process.env.REACT_APP_API}/api/checkAnswer`,
		{
			gameType: gameType,
			answer: answer,
			endpoint: endpoint,
			guest: this.state.me
		}
		).then( (res) => {
			console.log('res.data',res);
			this.setState({
				me : res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}
}

streakToZero = () => {
	if(localStorage.getItem('token') && localStorage.getItem('token').length){
		axios.post(`${process.env.REACT_APP_API}/api/streakToZero`, '', {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then( (res)=> {
			this.setState({me : res.data})
		}).catch( (err) => {
			console.log(err);
		})
	}else{
			axios.post(`${process.env.REACT_APP_API}/api/streakToZero`, {guest: this.state.me}).then( (res)=> {
				console.log('streak res.data',res.data);
				this.setState({me : res.data})
			}).catch( (err) => {
				console.log(err);
			})
		}
	}


removePoint = () => {
	if(localStorage.getItem('token') && localStorage.getItem('token').length){
		console.log('hello');
		axios.post(`${process.env.REACT_APP_API}/api/removePoint`, '', {headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`
		}}).then( (res)=> {
			this.setState({me : res.data})
			this.setState({
				trophy: getTrophy(this.state.me.points)
			})
		}).catch( (err) => {
			console.log(err);
		})
	}else{
		axios.post(`${process.env.REACT_APP_API}/api/removePoint`, {guest: this.state.me}).then( (res)=> {
			console.log('Skip button');
			console.log('res.data skip',res.data);
			this.setState({me : res.data})
			this.setState({
				trophy: getTrophy(this.state.me.points)
			})
		}).catch( (err) => {
			console.log(err);
		})
	}
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
				text={this.state.text} getPoints={this.getPoints}
				streakToZero={this.streakToZero} removePoint={this.removePoint} />
				<Bottonbar />
			</div>
		)
	}
}

export default App;
