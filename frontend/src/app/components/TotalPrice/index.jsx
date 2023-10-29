// import 't Orders.css'
import { useContext } from "react";
import Context from "../../context/Context";
import { PropTypes } from "prop-types";

function TotalPrice({ view }) {
  const { summaryList } = useContext(Context);

  return (
    <div>
      {view === "pedido"
        ? <h2>Total de pedido:</h2>
        : <h2>Valor Total</h2>
      }
      <h2>{`R$ ${summaryList.reduce((acc, product) => {
          acc += product.price*product.quantity;
          return acc;
        }, 0).toFixed(2)}`}
      </h2>
      {view === "total" && (
        <>
          <h2>Troco</h2>
          <h2>R$ 0</h2>
        </>
      )}
    </div>
  )
}

export default TotalPrice

TotalPrice.propTypes = {
  view: PropTypes.string,
};
