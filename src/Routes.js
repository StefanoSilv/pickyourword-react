import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import App from './App'
import Login from './Login'
import dotenv from 'dotenv'

class Routes extends Component {
	//state

	//Functions
	//A function which returns true if there is a token in the local storage
	// checkAuth = () => {
	// 	if(localStorage.getItem('token')){
	// 		return true
	// 	}else{
	// 		return false
	// 	}
	// }
	// //If checkAuth is true, we want to redirect the user
	// auth = () => {
	// 	if (this.checkAuth()){
	//
	// 	}
	// }

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={() => <Login />} />
					<Route path="/signup" component={() => <Signup />} />
					<Route path="/" component={() => <App /> } />
					)} />
				</Switch>
			</BrowserRouter>
		)
	}
}




export default Routes;
