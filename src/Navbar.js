import React, {Component} from 'react';
import './Navbar.css';
import User from './User'
import getTrophy from './getTrophy.js'


class Navbar extends Component {
	// Data
	state = {
		me : this.props.me,
		trophy: this.props.trophy,
		level: 1
	}

	// Functions
	//redirect to Login page
	loginRedirect = () => {
		window.location.href = '/login'
	}

	//redirect to Signup page
	signupRedirect = () => {
		window.location.href = '/signup'
	}


	//take the info from the logged user

	selectBackground = (background) =>{
		return  {backgroundImage: `url('${background}')`}
	}
	componentWillMount() {
		this.props.getLoggedUser();
}

	componentWillReceiveProps(props){
		this.setState({
			me: props.me
		})
		this.setState({
			trophy: props.trophy
		})
	}

	changeLevel = (e) => {
		this.setState({
			level: e.target.value
		})
	}

	showLevel = () => {
		if(this.state.level == 1){
				return 'Easy  '
		}
		if(this.state.level == 2){
				return 'Medium'
		}
		if(this.state.level == 3){
				return 'Difficult'
		}
	}

	// Render
	render() {
		return (
			<div id="navbar" className="row">
				<div id="game-logo">
				<div id="trophy" style={this.selectBackground(this.state.trophy.pic)} ></div>
				</div>
				<div id="points-level" >
					<div id="points">Points: {this.state.me.points}</div>
					<div id="status">Status: {this.state.trophy.name.toUpperCase()}</div>
					<small>Level</small><input type="range" min="1" max="3"
					value={this.state.level} className="slider" id="myRange"
					onChange={(e) => {this.changeLevel(e)}} />
					<p>{this.showLevel()}</p>
				</div>
				{ this.props.checkAuth() ? <User me={this.state.me} key={this.state.me._id}
				trophy={this.state.trophy} /> :
					<div id="user-navbar">
						<div id="logged-in">
							<small>Do you have an account?</small>
							<p onClick={() => this.loginRedirect()}>Log-in</p>
							<small>Otherwise... </small><span onClick={() => this.signupRedirect()}>Sign-up</span>
						</div>
					</div>
				}
			</div>

		)
	}
}

export default Navbar;
