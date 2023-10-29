// import 't Orders.css'
import { PropTypes } from "prop-types";

function Payment({ paymentMethod, handleInputChange }) {
  
  return (
    <div>
      <h2>Selecione a forma de pagamento:</h2>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="debit"
          checked={paymentMethod === 'debit'}
          onChange={handleInputChange}
        />
          Débito
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="credit"
          checked={paymentMethod === 'credit'}
          onChange={handleInputChange}
        />
          Crédito
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="money"
          checked={paymentMethod === 'money'}
          onChange={handleInputChange}
        />
        Dinheiro
      </label>
    </div>
  )
}

export default Payment

Payment.propTypes = {
  paymentMethod: PropTypes.string,
  handleInputChange: PropTypes.func,
};
