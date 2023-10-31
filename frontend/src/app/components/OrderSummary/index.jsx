// import 't Orders.css'
import { useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import SummaryListComponent from "../SummaryListComponent";
import "./OrderSummary.scss";

function OrderSummary() {
  const { summaryList, setSummaryList, sucessNewCustomer } = useContext(Context);



  const removeAllSummaryList = () => {
    setSummaryList([]);
  };

  return (
    <div className="orderSummary">
      <hr></hr>
      { sucessNewCustomer ? (<p className="orderSummary-title green">CLIENTE CRIADO COM SUCESSO</p>)
        :(!summaryList.length ? (<p className="orderSummary-title">Nenhum produto adicionado</p>)
          :(
            <div className="orderSummary-container"> 
              <h1 className="orderSummary-title">Resumo do pedido</h1>
              <SummaryListComponent view="summary" />

              <div className="orderSummary-container-btns">
                <button
                  type="button"
                  onClick={removeAllSummaryList}
                  className="orderSummary-container-btns-btnCancelar"
                >
                  Cancelar Pedido
                </button>
                <Link to="/order/details">
                  <button
                    type="button"
                    className="orderSummary-container-btns-btnFinalizar"
                  >
                    Finalizar Pedido
                  </button>
                </Link>
              </div>
            </div>
          ))
      }
    </div>
  )
}

export default OrderSummary
