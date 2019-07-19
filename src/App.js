import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import Bottonbar from './Bottonbar'
import Content from './Content'
import axios from 'axios'



class App extends Component {
	// Data


	// Functions


	// Render
	render() {
		return (
			<div id="main-container" className="container-fluid h-100">
				<Navbar checkAuth={this.props.checkAuth}/>
				<Content checkAuth={this.props.checkAuth} />
				<Bottonbar />
			</div>
		)
	}
}

export default App;
