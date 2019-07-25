import React, {Component} from 'react';
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
};



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
    <label for="cardNumber">Card number</label>
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
  <button id="pay-button" type="submit" className="btn btn-primary">Pay 2.99€</button>
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
