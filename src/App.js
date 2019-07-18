import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import Bottonbar from './Bottonbar'
import Content from './Content'
import axios from 'axios'



class App extends Component {
	// Data
	state = {
		user : []
	}

	// Functions


	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API}/api/me`).then((res) => {

			console.log('res', res.data);
	}).catch( (err) => {
		console.log(err);
	})
}

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
