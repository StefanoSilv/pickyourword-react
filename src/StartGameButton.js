import React, {Component} from 'react';
import './StartGameButton.css';


class StartGameButton extends Component {
	// Data

	// Functions
	removeDropdownMenu = () => {
		if(localStorage.getItem('token') && localStorage.getItem('token').length){
			var x = document.getElementById("user-unordered-list")
			if (x.classList.contains("show")) {
				x.className = x.className.replace("show", "")
			}
		}
	}

	// Render
	render() {
		return (
			<button onClick={ () => {this.props.gameMode(); this.removeDropdownMenu()}} id="start-game-button" type="button" className="btn btn-primary btn-lg">START THE GAME</button>
		)
	}
}

export default StartGameButton;
