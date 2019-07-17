import React, {Component} from 'react';
import './login.css';
import axios from 'axios'

class Login extends Component {
	// Data
	state = {
		email:'',
		password:'',
		error:''
	}
	// Functions
	//Same functions which are in the signup components to change the value field
	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	login = (e) => {
		e.preventDefault()
		axios.post(`${process.env.REACT_APP_API}/api/login`, this.state).then( (res) => {
			if(!res.data.token){
				this.setState({
					error: res.data
			})}else{
				this.setState({
					error: ''
				})
			}
			if(res.data.token){
				localStorage.setItem('token', res.data.token)
				this.props.auth()
			}else{
				document.getElementById('error_message').innerHTML='The login credentials are not correct. Try again.'
			}
		}).catch( (err) => {
			console.log('err', err)
		})
	}

	signup_redirect = (e) => {
		if(e){
			window.location.href = '/signup'
		}
	}

	showPassword(e) {
		if(e){
			var x = document.getElementById("exampleInputPassword1");
		  if (x.type === "password") {
		    x.type = "text";
		  } else {
		    x.type = "password";
		  }
		}
	}

	// Render
	render() {
		return (
			<div>
			<div id="signup-message"><span>You don't have an account? </span><span id="signup-redirect"
			onClick={(e) => this.signup_redirect(e)} >Sign-up</span></div>
				<form id="login_form" onSubmit={(e) => this.login(e)}>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" value={this.state.email}
						onChange={(e) => this.changeEmail(e)}
						className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
						<small id="emailHelp" className="form-text text-muted">Enter a valid Email address</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input type="password" value={this.state.password} onChange={(e) => this.changePassword(e)}
						className="form-control" id="exampleInputPassword1" placeholder="Password" />
						<small id="error_message"></small>
					</div>
					<div className="form-group form-check">
						<input onClick={ (e) => this.showPassword(e)} type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		)
	}
}

export default Login;
