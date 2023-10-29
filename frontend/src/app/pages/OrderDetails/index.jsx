// import 't Orders.css'
import { useContext, useState } from "react";
import Context from "../../context/Context";

function OrderDetails() {
  const { summaryList } = useContext(Context);
  const [customerName, setCustomerName] = useState('');

  const inputOnChange = ({ target: { value } }) => {
    setCustomerName(value);
  };

  return (
    <>
      <div>
        <h1>Resumo da compra</h1>
        {summaryList.map((product) => (
          <div key={product.id}>
            <p>{`${product.quantity}x`}</p>
            <p>{product.name}</p>
            <p>{`R$ ${product.price.toFixed(2)}`}</p>
          </div>
        ))}
        <h2>Total de pedido:</h2>
        <h2>{`R$ ${summaryList.reduce((acc, product) => {
            acc += product.price*product.quantity;
            return acc;
          }, 0).toFixed(2)}`}
        </h2>

        <h2>Nome do Cliente</h2>
        <label htmlFor="customerName" className="head">
          <input
            className="head"
            id="customerName"
            type="text"
            name="customerName"
            placeholder="Insira o seu nome aqui"
            value={ customerName }
            onChange={ inputOnChange }
          />
        </label>

        <div>
          <h2>Selecione a forma de pagamento:</h2>
          <label>
            <input type="radio" name="paymentMethod" value="debit"/>Débito
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="credit"/>Crédito
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="money"/>Dinheiro
          </label>
        </div>

        <div>
          <h2>Valor Total</h2>
          <h2>{`R$ ${summaryList.reduce((acc, product) => {
              acc += product.price*product.quantity;
              return acc;
            }, 0).toFixed(2)}`}
          </h2>
          <h2>Troco</h2>
          <h2>R$ 0</h2>
        </div>

        <div>
          <button>Cancelar</button>
          <button>Finalizar Pedido</button>
        </div>

      </div>
    </>
  )
}

export default OrderDetails
