import React, {Component} from 'react';
import './Content.css';
import StartGameButton from './StartGameButton'
import EscButton from './EscButton'
import SkipButton from './SkipButton'
import Question from './Question'
import Answer from './Answer'


class Content extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
				<div>
				<StartGameButton />
				<Question />
				<Answer />
				<EscButton />
				<SkipButton />
				</div>
		)
	}
}

export default Content;
