import React, {Component} from 'react';
import {Elements} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';
class MyStoreCheckout extends Component {
	// Data


			// Functions



	// Render
	render() {
		return (
			<Elements>
				<InjectedCheckoutForm />
			</Elements>
		)
	}
}

export default MyStoreCheckout;
