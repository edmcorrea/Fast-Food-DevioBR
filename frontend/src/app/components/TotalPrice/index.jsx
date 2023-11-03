import { useContext } from "react";
import Context from "../../context/Context";
import { PropTypes } from "prop-types";
import "./TotalPrice.scss"

function TotalPrice({ view }) {
  const { summaryList } = useContext(Context);

  return (
    <div className="totalPrice">
      <div className={`totalPrice-infoPrice${view === "pedido" ? "-total" : ""}`}>
        {view === "pedido"
          ? <h2 >Total do pedido</h2>
          : <h2>Valor entregue</h2>
        }
        <h2 className="totalPrice-infoPrice-price">{`R$ ${summaryList.reduce((acc, product) => {
            acc += product.price*product.quantity;
            return acc;
          }, 0).toFixed(2)}`}
        </h2>
      </div>

      {view === "total" && (
        <div className="totalPrice-infoPrice">
          <h2>Troco</h2>
          <h2 className="totalPrice-infoPrice-price">R$ 0</h2>
        </div>
      )}
    </div>
  )
}

export default TotalPrice

TotalPrice.propTypes = {
  view: PropTypes.string,
};
