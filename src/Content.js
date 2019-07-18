import React, {Component} from 'react';
import './Content.css';
import StartGameButton from './StartGameButton'
import EscButton from './EscButton'
import SkipButton from './SkipButton'
import Question from './Question'
import Answer from './Answer'


class Content extends Component {
	// Data
		state = {
			mode: false
		}

	// Functions

	gameMode = () => {
			this.setState({
			mode: true
			})
	}

	escMode = () => {
		this.setState({
		mode: false
		})
	}


	// Render
	render() {
		return (
			<div id="content" className="row">
				{this.state.mode ? (<div id="content" className="row">
					<Question />
					<Answer />
					<div id="button-part">
						<EscButton escMode={this.escMode} />
						<SkipButton />
					</div>
				</div>) : ( <StartGameButton gameMode={this.gameMode} />) }
			</div>
		)
	}
}

export default Content;
