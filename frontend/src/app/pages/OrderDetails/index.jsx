import { useContext, useState } from "react";
import Context from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import Payment from "../../components/Payment";
import SummaryListComponent from "../../components/SummaryListComponent";
import { requestPostCustomers } from "../../services/requests/request.customer";
import './OrderDetails.scss';
import { setSummaryListLocalStorage } from "../../services/getAndSetLocalStorage";

const DEFAULT_DELAY = 3000;

function OrderDetails() {
  const { setSummaryList, summaryList, setSucessNewCustomer } = useContext(Context);
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('money');
  const [err, setErr] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "paymentMethod") {
      setPaymentMethod(value);
    } else {
      setCustomerName(value);
    }
  };

  const handleSummaryList = () => {
    setSummaryList([]);
    setSummaryListLocalStorage([]);
  };

  const handleSubmit = async () => {
    const Data = {
      products: summaryList.map(item => {
        return {
          name: item.name,
          observation: item.observation,
          quantity: item.quantity,
        };
      }),
      customerName,
      status: "Preparing"
    };
    
    try {
      await requestPostCustomers('/customer', Data);
      handleSummaryList();

      navigate("/");

      setSucessNewCustomer(true);
      setTimeout(() => setSucessNewCustomer(false), DEFAULT_DELAY);
    } catch (error) {
      
      const { response: { data: { message } } } = error;

      if(message.includes("customerName") && message.includes("allowed")) {
        setErr(true);
        setTimeout(() => setErr(false), DEFAULT_DELAY);
      }

    }
  }

  return (
    <div className="orderDetails">
      <div className="orderDetails-divtitle">
        <h3 className="orderDetails-title">Pagamento</h3>
      </div>

      <div className="orderDetails-container">
        <div className="orderDetails-container-orderSummary">
          <h3 className="orderDetails-container-orderSummary-title">Resumo da compra</h3>
          <SummaryListComponent view="compra" />

          <h2 className="orderDetails-container-orderSummary-customer">Nome do Cliente</h2>
          <label htmlFor="customerName" className="orderDetails-container-orderSummary-label">
            <input
              className="orderDetails-container-orderSummary-label-input"
              id="customerName"
              type="text"
              name="customerName"
              placeholder="Insira o primeiro nome aqui"
              value={customerName}
              onChange={handleInputChange}
            />
          </label>
          {err && <h3 className="orderDetails-red">Insira o Primeiro Nome</h3>}
        </div>

        <div className="orderDetails-container-paymentSummary">
          <Payment
            paymentMethod={paymentMethod}
            handleInputChange={handleInputChange}
          />
        </div>
      </div>

      <div className="orderDetails-btns">
        <Link to="/">
          <button
            type="button"
            onClick={handleSummaryList}
            className="orderDetails-btns-btnCancelar"
          >
            Cancelar
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="orderDetails-btns-btnContinuar"
          >
            Continuar Adicionando
          </button>
        </Link>
        <button
          type="button"
          onClick={handleSubmit}
          className="orderDetails-btns-btnFinalizar"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

export default OrderDetails;
