// import 't Orders.css'
import { useContext } from "react";
import Context from "../../context/Context";

function OrderSummary() {
  const { summaryList, setSummaryList } = useContext(Context);

  const removeOnSummaryList = (id) => {
    const filteredWithOutProduct = summaryList.filter((product) => product.id != id);
    setSummaryList(filteredWithOutProduct);
  };

  return (
    <>
      {!summaryList.length ? (<p>Nenhum produto adicionado</p>)
      :(
        <div>
          <h1>Resumo dos pedidos</h1>
          {summaryList.map((product) => (
            <div key={product.id}>
              <img src={product.img}
                className="img"
                alt={product.name}
              />
              <p>{product.name}</p>
              {product.ingredientes.map((ingrediente, idx)=>(
                <div key={idx}>
                  <p>{ingrediente}</p>
                </div>
              ))}
              <p>{`R$ ${product.price.toFixed(2)}`}</p>
              <button
                onClick={()=> removeOnSummaryList(product.id)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default OrderSummary
