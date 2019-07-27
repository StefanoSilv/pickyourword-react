import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import './Pay.css'




class Pay extends Component {
	// Data
	state = {
		payMode: false
	}

	// Functions
	payMode = () => {
		this.setState({
			payMode: true
		})
};



	// Render
	render() {
		return (
			<div id="pay-mode-wrapper">
			{
				this.state.payMode ?
				(
					<StripeProvider apiKey="pk_test_KRt533arRYcFwAVwrxiioj8P00OFFyoDRx">
          <Elements>
            <CheckoutForm />
          </Elements>
      </StripeProvider>)
			:
			(	<div className="card-deck">
					<div className="card">
					<img src="https://res.cloudinary.com/do8qdtgy8/image/upload/v1564020613/pickyourword/WhatsApp_Image_2019-07-23_at_07.33.42_hmedxz.jpg" className="card-img-top" alt="account premium pickyourword"/>
					<div className="card-body">
					<h5 className="card-title">GET PREMIUM</h5>
					<div className="card-text">
					<p>Enjoy unlimited rounds.</p>
					<p>Just one payment. Play forever.</p>
					</div>
					</div>
					<div className="card-footer" type="submit" onClick={() => this.payMode()} >
					<small className="text-muted">Get premium for 2.99€</small>
					</div>
					</div>
			</div> )
		}
			</div>
			)
	}
}

export default Pay;
