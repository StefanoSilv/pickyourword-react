import React, {Component} from 'react';
import './Logout.css';

class Logout extends Component {
	// Data
	state = {

	}
	// Functions
	//Function that remove the local storage and redirect you to the loginpage
	logout = (e) => {
		e.preventDefault()
		localStorage.removeItem('token')
		window.location.href = '/login'
	}

	// Render
	render() {
		return (
			<div className="text-center">
				<button  onClick={ (e) => this.logout(e)}
				className="btn btn-secondary">Log-out</button>
			</div>
		)
	}
}

export default Logout;
