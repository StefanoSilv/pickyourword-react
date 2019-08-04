import React, {Component} from 'react';
import './User.css';
import Logout from './Logout'
import moment from 'moment'




class User extends Component {
	// Data
	state = {
		me : this.props.me,
		trophy: this.props.trophy
	}

	// Functions
dropdownMenu = () => {
var x = document.getElementById("user-unordered-list")
	if (x.className.indexOf("show") == -1) {
	x.className += "show";
	} else {
	x.className = x.className.replace("show", "")
	}
}

stylePremium = () => {
var x = document.getElementById("user-type-navbar")
 if(!x.classList.contains("premium-navbar-style")){
	if (this.state.me.user_type=='premium') {
		x.className += "premium-navbar-style";
	}
 }
}


redirectPremium = () => {
	window.location.href = '/pay'
}

componentWillReceiveProps(props){
	this.setState({
		trophy: props.trophy
	})
	this.setState({
		me: props.me
	})
	this.stylePremium()
}

dateFormatter = () => {
	let iscription_date = this.state.me.iscription_date
	iscription_date = moment(iscription_date).format('DD MMM YYYY')
	return iscription_date
}


premiumUser = () => {
	if (this.state.me.user_type==='premium'){
		return true
	}
}

	// Render
	render() {
		return (
			<div id="user-navbar">
				<div id="logged-in">
				{
					this.premiumUser() ?
					<div id="premium-user-block">
					<i className="fas fa-star"></i>
					<span> Premium </span>
					<i className="fas fa-star"></i></div>
					:
					<button id="get-premium" type="button"
					onClick={ () =>this.redirectPremium()} className="btn btn-outline-warning">
					Get Premium</button>
				}
					<p id="user-account" onClick={() => this.dropdownMenu()}>Your account</p>
						<ul id="user-unordered-list">
							<li id="nickname-navbar">Nickname: {this.state.me.name}</li>
							<li>email: {this.state.me.email}</li>
							<li>status: {this.state.trophy.name}</li>
							<li>points: {this.state.me.points}</li>
							<li>Trophies: {this.state.trophy.number}</li>
							<li>Subscription date: {this.dateFormatter()}</li>
							<li>Account: <span id="user-type-navbar">{this.state.me.user_type}</span></li>
							<li><Logout /></li>
						</ul>
				</div>
			</div>
		)
	}
}

export default User;
