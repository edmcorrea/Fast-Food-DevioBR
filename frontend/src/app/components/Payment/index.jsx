import './Payment.scss'
import { PropTypes } from "prop-types";

function Payment({ paymentMethod, handleInputChange }) {
  
  return (
    <div className="payment">
      <h2 className="payment-title">Selecione a forma de pagamento:</h2>
      <label className={`payment-methodPayment${paymentMethod === 'debit' ? "-selected" : ""}`}>
        <h3>Débito</h3>
        <input
          type="radio"
          name="paymentMethod"
          value="debit"
          checked={paymentMethod === 'debit'}
          onChange={handleInputChange}
        />
      </label>
      <label className={`payment-methodPayment${paymentMethod === 'credit' ? "-selected" : ""}`}>
        Crédito
        <input
          type="radio"
          name="paymentMethod"
          value="credit"
          checked={paymentMethod === 'credit'}
          onChange={handleInputChange}
        />
      </label>
      <label className={`payment-methodPayment${paymentMethod === 'money' ? "-selected" : ""}`}>
        Dinheiro
        <input
          type="radio"
          name="paymentMethod"
          value="money"
          className='payment-methodPayment-selected-input'
          checked={paymentMethod === 'money'}
          onChange={handleInputChange}
        />
      </label>
    </div>
  )
}

export default Payment

Payment.propTypes = {
  paymentMethod: PropTypes.string,
  handleInputChange: PropTypes.func,
};
