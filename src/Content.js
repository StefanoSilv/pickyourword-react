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
			<div id="content" class="row">
				<Question />
				<Answer />
				<div id="button-part">
					<EscButton />
					<SkipButton />
				</div>
				<StartGameButton />
			</div>
		)
	}
}

export default Content;
