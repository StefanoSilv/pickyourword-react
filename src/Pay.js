import React, {Component} from 'react';
import './Pay.css'
import axios from 'axios'


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

pay = () => {
	const stripe = Stripe('pk_test_KRt533arRYcFwAVwrxiioj8P00OFFyoDRx')
	const elements = stripe.elements()
	const card = elements.create('card')
	card.mount = ('#card')
	// let payment = document.getElementById('payment')

	stripe.createToken(card).then((res) => {
			console.log('res', res.token.id)
			axios.post(`${process.env.REACT_APP_API}/api/pay`, {
				token: res.token.id,
				amount: 2.99
			}).then((res) => {
				console.log('res', res)
				// Insert a success message
				// payment.innerHTML = `<span class="success">Thank you!</span>`
			}).catch((err) => {
				console.log('err', err)
			})
		}).catch((err) => {
			console.log('err', err)
		})

}



	// Render
	render() {
		return (
			<div>
			{
				this.state.payMode ?
				(
					<div id="payment-form-container">
		<form id="payment-form">
			<div className="form-group">
		    <label for="Name">Name on card</label>
		    <input type="text" className="form-control" id="cardNumber" />
		  </div>
  <div className="form-group">
    <label id="card" for="cardNumber">Card number</label>
    <input type="text" className="form-control" id="cardNumber" />
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="Expiration">Expiration</label>
      <input type="text" className="form-control" id="expiration" placeholder="MM/YY" />
    </div>
    <div className="form-group col-md-2">

    </div>
    <div className="form-group col-md-3">
      <label for="inputCVC">CVC</label>
      <input id="cvc" type="text" className="form-control" id="inputCVC" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" for="gridCheck">
        Confirm your data
      </label>
    </div>
  </div>
  <button id="pay-button" type="button" className="btn btn-primary">Pay 2.99€</button>
</form>
</div>)
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
