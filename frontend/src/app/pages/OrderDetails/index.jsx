// import 't Orders.css'
import { useContext, useState } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import Payment from "../../components/Payment";
import SummaryListComponent from "../../components/SummaryListComponent";
import TotalPrice from "../../components/TotalPrice";

function OrderDetails() {
  const { summaryList, setSummmaryList } = useContext(Context);
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('money');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "paymentMethod") {
      setPaymentMethod(value);
    } else {
      setCustomerName(value);
    }
  };

  const handleSummaryList = () => {
    setSummmaryList([]);
  }

  const handleSubmit = async () => {
    // try {
    //   if(btnName === 'Cadastrar') {
    //     await requestPostCustomers('/customer', Data);
    //   } else {
    //     await requestPutCustomer(`/customer/${idCustm}`, Data);
    //   }
    //   submitSuccessCallback()
    // } catch (error) {
    //   const { response: { data: { message } } } = error;
    //   setError({ bool: true, message });
    //   setTimeout(() => setError({ bool: false, message: '' }), DEFAULT_DELAY);
    // }
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
        <Link to="/">
          <button
            type="button"
            onClick={handleSubmit}
          >
            Finalizar Pedido
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OrderDetails
