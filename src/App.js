import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import Bottonbar from './Bottonbar'
import Content from './Content'



class App extends Component {
	// Data

	// Functions

	// Render
	render() {
		return (
			<div id="main-container" class="container-fluid h-100">
				<Navbar />
				<Content />
				<Bottonbar />
			</div>
		)
	}
}

export default App;
