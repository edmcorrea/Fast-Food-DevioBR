// import 't Orders.css'
import { useContext } from "react";
import Context from "../../context/Context";

function OrderSummary() {
  const { summaryList } = useContext(Context);

  return (
    <>
      {!summaryList.length ? (<p>Nenhum produto adicionado</p>)
      :(
        <div>
          <h1>Resumo dos pedidos</h1>
          {summaryList.map((product) => (
            <div key={product.name}>
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
              <p>{`R$${product.price}`}</p>
              <button>
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
