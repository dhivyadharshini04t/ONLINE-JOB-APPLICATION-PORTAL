import React from 'react';
import '../Style/Payment.css';
import { Link } from 'react-router-dom';
class PaymentPage extends React.Component {
  render() {
    return (
      <div className="pay">
      <div className="payment-container">
        <h2 className="payment-heading">Payment Details</h2>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" className="card-number-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" className="expiry-date-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" className="cvv-input" required />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="text" id="amount" className="amount-input" required />
          </div>
          <Link to="/Form" className="submit-button">
  Pay Now
</Link>
        </form>
      </div></div>
    );
  }
}

export default PaymentPage;
