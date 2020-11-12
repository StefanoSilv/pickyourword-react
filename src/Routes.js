import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import App from './App';
import Login from './Login';
import Pay from './Pay';

class Routes extends Component {
  //state

  //Functions
  //Functions
  //A function which returns true if there is a token in the local storage
  checkAuth = () => {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  };
  //If checkAuth is true, we want to redirect the user
  auth = () => {
    if (this.checkAuth()) {
      window.location.href = '/';
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={() => <Login auth={this.auth} />} />
          <Route path='/signup' component={() => <Signup auth={this.auth} />} />
          <Route path='/pay' component={() => <Pay />} />
          <Route
            path='/'
            component={() => <App checkAuth={this.checkAuth} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
