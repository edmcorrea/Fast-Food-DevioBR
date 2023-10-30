// import 't Orders.css'
import { useContext, useState } from "react";
import Context from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import Payment from "../../components/Payment";
import SummaryListComponent from "../../components/SummaryListComponent";
import TotalPrice from "../../components/TotalPrice";
import { requestPostCustomers } from "../../services/requests/request.customer";

const DEFAULT_DELAY = 5000;

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
      setSummaryList([]);

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
    <div>
      <h1>Resumo da compra</h1>
      <SummaryListComponent view="compra"/>

      <h2>Nome do Cliente</h2>
      <label htmlFor="customerName" className="head">
        <input
          className="head"
          id="customerName"
          type="text"
          name="customerName"
          placeholder="Insira o nome aqui"
          value={ customerName }
          onChange={ handleInputChange }
        />
      </label>

      <Payment
        paymentMethod={paymentMethod}
        handleInputChange={handleInputChange}
      />

      <TotalPrice view="total"/>

      {err && <h3> Insira o Nome do Cliente</h3>}

      <div>
        <Link to="/">
          <button
            type="button"
            onClick={handleSummaryList}
          >
            Cancelar
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
          >
            Continuar Adicionando
          </button>
        </Link>
        {/* <Link to="/"> */}
          <button
            type="button"
            onClick={handleSubmit}
          >
            Finalizar Pedido
          </button>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default OrderDetails
