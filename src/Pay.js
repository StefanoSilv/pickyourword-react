import React, {Component} from 'react';
import {render} from 'react-dom';
import {StripeProvider} from 'react-stripe-elements';
import MyStoreCheckout from './MyStoreCheckout';
import './Pay.css'


class Pay extends Component {
	// Data
	state = {
		payMode: false
	}

	// Functions
	pay = () => {
		this.setState({
			payMode: true
		})
		console.log(this.state.payMode);
};

componentWillMount(){
	console.log(this.state.payMode);
}


	// Render
	render() {
		return (
			<div>
			{
				this.state.payMode ?
					( <StripeProvider apiKey="pk_test_KRt533arRYcFwAVwrxiioj8P00OFFyoDRx">
				  <MyStoreCheckout />
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
					<div className="card-footer" type="submit" onClick={() => this.pay()} >
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
