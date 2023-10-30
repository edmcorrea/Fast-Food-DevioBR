// import 't Orders.css'
import { useContext } from "react";
import Context from "../../context/Context";
import { Link } from "react-router-dom";
import SummaryListComponent from "../SummaryListComponent";

function OrderSummary() {
  const { summaryList, setSummaryList, sucessNewCustomer } = useContext(Context);



  const removeAllSummaryList = () => {
    setSummaryList([]);
  };

  return (
    <>
      { sucessNewCustomer ? (<p>CLIENTE CRIADO COM SUCESSO</p>)
        :(!summaryList.length ? (<p>Nenhum produto adicionado</p>)
          :(
            <div>
              <h1>Resumo do pedido</h1>
              <SummaryListComponent view="summary" />

              <button
                type="button"
                onClick={removeAllSummaryList}
              >
                Cancelar Pedido
              </button>
              <Link to="/order/details">
                <button
                  type="button"
                  >
                  Finalizar Pedido
                </button>
                </Link>
            </div>
          ))
      }
    </>
  )
}

export default OrderSummary
