import { useContext, useEffect, useState } from 'react';
import './Payment.scss'
import { PropTypes } from "prop-types";
import Context from '../../context/Context';

function Payment({ paymentMethod, handleInputChange }) {
  const { summaryList } = useContext(Context);
  const [valueDelivered, setValueDelivered] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);


  const handleValueDelivered = (event) => {
    const { value } = event.target;
    setValueDelivered(value);
  };

  useEffect(() => {
    setTotalPrice(summaryList.reduce((acc, product) => {
      acc += product.price*product.quantity;
      return acc;
    }, 0))
  },[]);
  
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

      {paymentMethod === 'money' && 
        <div className="payment-prices">
          <label className="payment-prices-valueDelivered">
            <p className="payment-prices-valueDelivered-title"> Valor entregue</p>
            <input
              type="number"
              placeholder={`Valor mínimo é R$ ${totalPrice.toFixed(2)}`}
              name="delivered"
              value={valueDelivered}
              onChange={handleValueDelivered}
            />
          </label>
          <div className="payment-prices-valueDelivered">
            <p className="payment-prices-valueDelivered-title">Troco</p>
            <p className="payment-prices-valueDelivered-change">{valueDelivered == "" ? '0.00' : (valueDelivered-totalPrice).toFixed(2) }</p>
          </div>
        </div>
      }
    </div>
  )
}

export default Payment

Payment.propTypes = {
  paymentMethod: PropTypes.string,
  handleInputChange: PropTypes.func,
};
