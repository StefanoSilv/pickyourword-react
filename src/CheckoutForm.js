import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import axios from 'axios'

class CheckoutForm extends Component {
	constructor(props) {
  super(props);
  this.state = {complete: false};
}

pay = () => {
	  let stripe_token = this.props.stripe.createToken({name: "Name"})

			console.log('token', stripe_token);
			axios.post(`${process.env.REACT_APP_API}/api/pay`, {
						token: stripe_token,
					}, {headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`}}).then((res) => {
									console.log('res', res)
								}).catch((err) => {
									console.log('err', err)
								})
	}





  render() {
		if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
			<div id="payment-form-container">
      <div id="payment-form-container" className="checkout">
			<div id="payment-form">
        <CardElement />
        <button onClick={() => this.pay()}>Pay 2.99€</button>
      </div>
			</div>
			</div>
    );
  }
}

export default injectStripe(CheckoutForm);
