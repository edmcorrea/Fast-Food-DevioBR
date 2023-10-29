// import 't Orders.css'
import { useContext } from "react";
import Context from "../../context/Context";
import { PropTypes } from "prop-types";
import TotalPrice from "../TotalPrice";

function SummaryListComponent({view}) {
  const { summaryList, setSummaryList } = useContext(Context);

  const removeOneSummaryList = (id) => {
    const filteredWithOutProduct = summaryList.filter((product) => product.id != id);
    setSummaryList(filteredWithOutProduct);
  };

  return (
    <div>
      {summaryList.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{`${product.quantity}x`}</p>
          {view === "summary" && (
            <>
              <p>Observações:</p>
              <p>{product.observation}</p>
            </>
          )}
          <p>{`R$ ${product.price.toFixed(2)}`}</p>
          {view === "summary" && (
            <>
              <button
              type="button"
                onClick={()=> removeOneSummaryList(product.id)}
              >
                Remover
              </button>
            </>
          )}
        </div>
      ))}
      <TotalPrice view="pedido"/>
    </div>
  )
}

export default SummaryListComponent

SummaryListComponent.propTypes = {
  view: PropTypes.string,
};
