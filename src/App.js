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
		},
		level:1,
		rules: false
	}


	// Functions
	createAnswer = (e, text) => {
		e.preventDefault()
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
		let question_mark_number = Math.floor(Math.random() * (this.state.level*2))
		let between = questionMark.repeat(question_mark_number)
		//The final endpoint
		endpoint = `?sp=${x}?${between}${y}`
		//Word in the small box
		let query = endpoint.split('=')[1]
		//Question in the big box
		let question =  `${gameType}. Word that starts with ${x}, ends with ${y}, and has ${question_mark_number + 1} letter(s) in the middle`


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
	let points_before = this.state.me.points
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
			this.getQuestion()
			if(res.data.points > points_before){
				this.correctAnswer()
			}else{
				this.wrongAnswer()
			}
			this.setState({
				me : res.data
			})
			this.setState({
				trophy: getTrophy(this.state.me.points)
			})
		}).catch((err) => {
			this.getQuestion()
			console.log('err', err)
		})
	}else{ //for not logged user
		axios.post(`${process.env.REACT_APP_API}/api/checkAnswer`,
		{
			gameType: gameType,
			answer: answer,
			endpoint: endpoint,
			guest: this.state.me
		}
		).then( (res) => {
			if(res.data.success==false){
				document.getElementById("content").innerHTML = "<h1>You finished your rounds.</h1> <h1>Sign-up to continue, it is free!</h1>"
			}else{
				this.getQuestion()
				if(res.data.points > points_before){
					this.correctAnswer()
				}else{
					this.wrongAnswer()
				}
				this.setState({
					me : res.data
				})
			}
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
				this.setState({me : res.data})
			}).catch( (err) => {
				console.log(err);
			})
		}
	}


removePoint = () => {
	if(localStorage.getItem('token') && localStorage.getItem('token').length){
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
			this.setState({me : res.data})
			this.setState({
				trophy: getTrophy(this.state.me.points)
			})
		}).catch( (err) => {
			console.log(err);
		})
	}
}

changeLevel = (e) => {
	this.setState({
		level: e.target.value
	})
}

correctAnswer = () => {
 	let x = document.getElementById("message-answer-correct")
	let y = document.getElementById("answer-box")
	x.className += "message-answer-correct"
	y.className += "correct-answer"
	setTimeout(() => {
		x.classList.remove("message-answer-correct")
		y.classList.remove("correct-answer")
	}, 1000)
}

wrongAnswer = () => {
  let x = document.getElementById("message-answer-wrong")
	let y = document.getElementById("answer-box")
	y.className += "wrong-answer"
	x.classList.add("message-answer-wrong")
	setTimeout(() => {
		x.classList.remove("message-answer-wrong")
		y.classList.remove("wrong-answer")
	}, 1000)
}

//Change the content and show the rules

rulesMode = () => {
	if(this.state.rules==false){
		this.setState({
			rules: true
		})
	}else{
		this.setState({
			rules: false
		})
	}
}


	// Render
	render() {
		return (
			<div id="main-container" className="container-fluid h-100">
				<Navbar checkAuth={this.props.checkAuth} getQuestion={this.getQuestion}
				getLoggedUser={this.getLoggedUser} me={this.state.me}
				trophy={this.state.trophy} level={this.state.level}
				changeLevel={this.changeLevel}/>
				<h1 id="message-answer-correct">Correct!</h1>
				<h1 id="message-answer-wrong">Try again!</h1>
				{ this.state.rules ?
					<div id="rules-square">
						<h2>Rules</h2><span onClick={() => this.rulesMode()}>Come back to play</span>
						<p>One must pick a word which fit the request. More than one word can be correct. Just pick yours!</p>
						<p>One scores points differently according to the correct answers given in a row. (Eg. The first correct answer values 2 points, the fifth one values 10 points.)</p>
						<p>If one skips a question, a point is lost, such as the streak. Sorry!</p>
						<p>There are three difficulty levels. Choose the one which challenges you the most.</p>
						<p>You can play up to 10 rounds without signing up. Good news: you can sign up in two click!</p>
						<p>You can play up to 1000 rounds with a basic account. Get premium if you want more.</p>
						<p>There are 17 levels till the Supreme Emperor status of the pick your word universe, according to the points accumulated. Every level is a trophy. Time to climb in the ranking…</p>
						<p>Have fun!</p>
					</div>
					:
				<Content createAnswer={this.createAnswer} getLoggedUser={this.getLoggedUser}
				checkAuth={this.props.checkAuth} getQuestion={this.getQuestion}
				query={this.state.query} question={this.state.question}
				text={this.state.text} getPoints={this.getPoints}
				streakToZero={this.streakToZero} removePoint={this.removePoint} />}
				<Bottonbar rulesMode={this.rulesMode}/>
			</div>
		)
	}
}

export default App;
