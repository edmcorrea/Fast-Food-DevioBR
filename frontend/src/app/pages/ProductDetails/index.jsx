// import 't Orders.css'
import { useContext, useEffect, useState } from "react";
import { productsMock } from "../../services/products.mock"
import { Link, useParams } from "react-router-dom";
import Context from "../../context/Context";

function ProductDetails() {
  const { id } = useParams();
  const { summaryList, setSummaryList } = useContext(Context);

  const [filteredProduct, setFilteredProduct] = useState([]);
  const [observation, setObservation] = useState("");
  const [quantity, setQuantity] = useState(1); 
  
  useEffect(()=> {
    const filtered = productsMock.filter((product) => product.id == id)
    setFilteredProduct(filtered);
  }, [id]);

    const addToSummaryList = (id) => {
    const updatedSummaryList = [...summaryList];
    
    let foundProduct = productsMock.find((product) => product.id == id);

    foundProduct.observation = observation;
    foundProduct.quantity = quantity;

    updatedSummaryList.push(foundProduct);
    setSummaryList(updatedSummaryList);
  }

  const handleObservationsChange = (event) => {
    setObservation(event.target.value);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {!filteredProduct.length ? (<p>Carregando</p>) :
      <div>
        <h1>Revise seu pedido</h1>
        {filteredProduct.map((filtered)=> (
          <div key={filtered.id}>
            <p>{filtered.name}</p>
            {filtered.ingredientes.map((ingrediente, idx)=>(
              <div key={idx}>
                <p>{ingrediente}</p>
              </div>
            ))}
            <p>{`R$ ${filtered.price.toFixed(2)}`}</p>
          </div>
        ))}
        <div>
          <button type="button" onClick={decrementQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button type="button" onClick={incrementQuantity}>
            +
          </button>
        </div>
        <div>
          <label>Observações:</label>
          <textarea
            rows="4"
            cols="50"
            value={observation}
            onChange={handleObservationsChange}
          ></textarea>
        </div>
        <Link to="/">
          <button
            type="button"
          >
            Voltar
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            onClick={() => addToSummaryList(id)}
            >
            Continuar Adicionando
          </button>
        </Link>
      </div>
      }
    </>
  )
}

export default ProductDetails
