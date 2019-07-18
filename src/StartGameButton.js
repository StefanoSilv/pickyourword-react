import React, {Component} from 'react';
import './StartGameButton.css';


class StartGameButton extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<button onClick={ () => this.props.gameMode()} id="start-game-button" type="button" className="btn btn-primary btn-lg">START THE GAME</button>
		)
	}
}

export default StartGameButton;
