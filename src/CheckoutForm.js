import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'
import './CheckoutForm.css'

class CheckoutForm extends Component {
	constructor(props) {
  super(props);
  this.state = {complete: false};
	this.submit = this.submit.bind(this);
}


async submit(ev) {
  let {token} = await this.props.stripe.createToken({name: "Name"});
	console.log(token);
  let response = await fetch(`${process.env.REACT_APP_API}/api/pay`, {
    method: "POST",
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}`},
    body: token.id
  });

  if (response.ok) this.setState({complete: true});
}

homepageRedirect = () => {
	window.location.href = '/'
}



  render() {
		if (this.state.complete) return <div id="purchase-completed">
		<h1>Purchase Complete</h1>
		<p onClick={()=> this.homepageRedirect()} id="homepage_redirect"> Come back to play </p>
		</div>;
    return (
			<div id="payment-form-container">
      <div id="payment-form-container" className="checkout">
			<div id="payment-form">
        <CardElement />
        <button id="pay-button-checkout" onClick={this.submit}>Pay 2.99€</button>
      </div>
			</div>
			</div>
    );
  }
}

export default injectStripe(CheckoutForm);
