import React, {Component} from 'react';
import './Content.css';
import StartGameButton from './StartGameButton'
import EscButton from './EscButton'
import SkipButton from './SkipButton'
import Question from './Question'
import Answer from './Answer'
import axios from 'axios'


class Content extends Component {
	// Data
		state = {
			mode: false,
			query: '',
			question: ''
		}

	// Functions

	gameMode = () => {
			this.setState({
			mode: true
			})
			this.props.getQuestion()
	}

	escMode = () => {
		this.setState({
		mode: false
		})
	}


	componentWillReceiveProps(props){
		this.setState({
			query: this.props.query,
		})
		this.setState({
			question: this.props.question,
		})
	}

	// Render
	render() {
		return (
			<div id="content" className="row">
				{this.state.mode ? (<div id="content" className="row">
					<Question getQuestion={this.props.getQuestion}
					query={this.props.query} question={this.props.question} />
					<Answer getQuestion={this.props.getQuestion} />
					<div id="button-part">
						<EscButton escMode={this.escMode} />
						<SkipButton getQuestion={this.props.getQuestion} />
					</div>
				</div>) : ( <StartGameButton gameMode={this.gameMode} />) }
			</div>
		)
	}
}

export default Content;
